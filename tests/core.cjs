const test=require('node:test'),assert=require('node:assert/strict');
const C=require('../assets/mission-core.js'),P=C.PHASES;
test('controller answers directly; steal requires an eligible buzz',()=>{assert(C.canAnswer(P.ANSWER,'p1','p1',false));assert(!C.canAnswer(P.ANSWER,'p1','p2',false));assert(!C.canBuzz(P.ANSWER,[],'p2',false));assert(C.canBuzz(P.STEAL,['p1'],'p2',false));assert(!C.canBuzz(P.STEAL,['p1'],'p1',false));assert(!C.canAnswer(P.ANSWER,'p1','p1',true));});
test('standard competition ranks preserve player order and negative scores',()=>{const players=[{name:'C',score:100},{name:'A',score:500},{name:'B',score:500},{name:'D',score:-10}];assert.deepEqual(C.ranks(players).map(p=>p.rank),[1,1,3,4]);assert.equal(players[0].name,'C');});
test('final wager limit follows available positive score',()=>{assert.equal(C.finalLimit(-50),0);assert.equal(C.finalLimit(0),0);assert.equal(C.finalLimit(950),950);});
test('deadlines do not depend on countdown ticks',()=>{assert.equal(C.remaining(11000,1000),10);assert.equal(C.remaining(11000,8500),3);assert.equal(C.remaining(11000,12000),0);});
test('replayed IDs remain bounded and identifiable',()=>{const l=new C.Ledger(2);l.add('a');l.add('b');assert(l.has('a'));l.add('c');assert(!l.has('a'));assert(l.has('c'));});
test('local QR encodes a complete join URL as SVG',()=>{const qr=require('../assets/qrcode.js')(0,'M');qr.addData('https://super17x.github.io/black-allies-jeopardy-Final/buzzer.html?room=ABC123','Byte');qr.make();assert(qr.createSvgTag(8,4).includes('<svg'));assert(qr.getModuleCount()>20);});
