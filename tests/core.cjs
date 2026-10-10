const test=require('node:test'),assert=require('node:assert/strict');
const C=require('../assets/mission-core.js'),P=C.PHASES;
test('controller answers directly; steal requires an eligible buzz',()=>{assert(C.canAnswer(P.ANSWER,'p1','p1',false));assert(!C.canAnswer(P.ANSWER,'p1','p2',false));assert(!C.canBuzz(P.ANSWER,[],'p2',false));assert(C.canBuzz(P.STEAL,['p1'],'p2',false));assert(!C.canBuzz(P.STEAL,['p1'],'p1',false));assert(!C.canAnswer(P.ANSWER,'p1','p1',true));});
test('standard competition ranks preserve player order and negative scores',()=>{const players=[{name:'C',score:100},{name:'A',score:500},{name:'B',score:500},{name:'D',score:-10}];assert.deepEqual(C.ranks(players).map(p=>p.rank),[1,1,3,4]);assert.equal(players[0].name,'C');});
test('final wager limit follows available positive score',()=>{assert.equal(C.finalLimit(-50),0);assert.equal(C.finalLimit(0),0);assert.equal(C.finalLimit(950),950);});
test('deadlines do not depend on countdown ticks',()=>{assert.equal(C.remaining(11000,1000),10);assert.equal(C.remaining(11000,8500),3);assert.equal(C.remaining(11000,12000),0);});
test('replayed IDs remain bounded and identifiable',()=>{const l=new C.Ledger(2);l.add('a');l.add('b');assert(l.has('a'));l.add('c');assert(!l.has('a'));assert(l.has('c'));});
test('local QR encodes a complete join URL as SVG',()=>{const qr=require('../assets/qrcode.js')(0,'M');qr.addData('https://super17x.github.io/black-allies-jeopardy-Final/buzzer.html?room=ABC123','Byte');qr.make();assert(qr.createSvgTag(8,4).includes('<svg'));assert(qr.getModuleCount()>20);});
test('short answers match Jeopardy phrasing without accepting a different fact',()=>{assert.equal(C.answerKey('What are the DBQs?'),C.answerKey('DBQs'));assert.equal(C.answerKey('Who is Charles Drew?'),C.answerKey('Charles Drew'));assert.notEqual(C.answerKey('10 days'),C.answerKey('100 days'));assert.equal(C.answerKey('WHAT IS TBI?'),C.answerKey('tbi'));});
test('rotation consumes unseen questions before recycling and avoids duplicates in a game',()=>{const pool=Array.from({length:10},(_,i)=>['Question '+i,['Answer '+i]]);const first=C.rotatePool(pool,[],5,()=>0),second=C.rotatePool(pool,first.history,5,()=>0),third=C.rotatePool(pool,second.history,5,()=>0);assert.equal(new Set([...first.items,...second.items].map(x=>x[0])).size,10);assert.equal(new Set(third.items.map(x=>x[0])).size,5);assert.throws(()=>C.rotatePool(pool,[],11));const crossing=C.rotatePool(pool,first.history,8,()=>0);assert.equal(new Set(crossing.items.map(x=>x[0])).size,8);});

test('answer formatting tolerates spaces, punctuation, Unicode and contractions',()=>{for(const response of ['  CHRONIC   FATIGUE SYNDROME  ','What is: chronic fatigue syndrome?','What’s chronic fatigue syndrome?','chronic\tfatigue\nsyndrome','ＣＨＲＯＮＩＣ fatigue syndrome','chronicfatiguesyndrome'])assert.equal(C.answerKey(response),C.answerKey('Chronic fatigue syndrome'));assert.equal(C.answerKey('Remarks & Extra Remarks'),C.answerKey('Remarks and Extra Remarks'));assert.equal(C.answerKey('café'),C.answerKey('cafe'));assert.notEqual(C.answerKey('No'),C.answerKey('Yes'));assert.notEqual(C.answerKey('6 months'),C.answerKey('60 months'));assert.equal(C.answerKey('...'), '');});
test('VA bank has ten sourced categories with fifteen unique playable questions each',()=>{
 const bank=require('../assets/va-question-bank.js'),questions=[];
 assert.equal(Object.keys(bank.categories).length,10);
 for(const [category,pool] of Object.entries(bank.categories)){
  assert.equal(pool.length,15,category);
  for(const [question,answers,explanation,source]of pool){assert(question.trim());assert(answers.length);assert(answers.every(a=>C.answerKey(a)));assert(explanation.includes(source));assert(new URL(source).hostname.endsWith('va.gov'));questions.push(question);}
  let history=[],drawn=[];
  for(let game=0;game<3;game++){const draw=C.rotatePool(pool,history,5,()=>0);history=draw.history;drawn.push(...draw.items.map(q=>q[0]));}
  assert.equal(new Set(drawn).size,15,category+' rotates all questions before repeating');
 }
 assert.equal(new Set(questions).size,150);
 assert.equal(bank.finalQuestions.length,5);
 for(const final of bank.finalQuestions)assert(final.answers.every(a=>C.answerKey(a)));
});
