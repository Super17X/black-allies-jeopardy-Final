/* Shared deterministic rules for host, controller and automated checks. */
(function(root){
  const PHASES=Object.freeze({LOBBY:'lobby',BRIEFING:'briefing',BOARD:'selection',WAGER:'daily-double-wager',ANSWER:'answering',STEAL:'steal-open',STEAL_ANSWER:'steal-answering',DEBRIEF:'debrief',FINAL_WAGER:'final-wager',FINAL_ANSWER:'final-answer',FINAL_REVEAL:'final-reveal',RESULTS:'results'});
  const id=()=>root.crypto?.randomUUID?.()||`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
  const remaining=(deadline,now=Date.now())=>Math.max(0,Math.ceil((deadline-now)/1000));
  const ranks=players=>{let rank=0;const sorted=players.map((player,index)=>({player,index})).sort((a,b)=>b.player.score-a.player.score);return sorted.map((item,i)=>{if(!i||item.player.score!==sorted[i-1].player.score)rank=i+1;return {...item,rank};});};
  const finalLimit=score=>Math.max(0,Math.floor(Number(score)||0));
  const canAnswer=(phase,controller,player,paused)=>!paused&&[PHASES.ANSWER,PHASES.STEAL_ANSWER].includes(phase)&&controller===player;
  const canBuzz=(phase,attempted,player,paused)=>!paused&&phase===PHASES.STEAL&&!attempted.includes(player);
  class Ledger{constructor(limit=1000){this.seen=new Map();this.limit=limit;}has(id){return this.seen.has(id);}add(id){this.seen.set(id,Date.now());while(this.seen.size>this.limit)this.seen.delete(this.seen.keys().next().value);}}
  const answerKey=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/^(?:what|who)\s+(?:is|are|was|were)\s+/,'').replace(/^(?:a|an|the)\s+/,'').replace(/[^a-z0-9]/g,'');
  function rotatePool(items,previous=[],count=1,rng=Math.random){
    const unique=[...new Map(items.map(item=>[JSON.stringify(item),item])).entries()];
    if(count>unique.length)throw Error('Not enough distinct questions');
    let seen=new Set(previous),chosen=[],available=unique.filter(([key])=>!seen.has(key));
    while(chosen.length<count){if(!available.length){seen=new Set();available=unique.filter(([key])=>!chosen.some(([id])=>id===key));}
      const index=Math.min(available.length-1,Math.floor(rng()*available.length));const [item]=available.splice(index,1);chosen.push(item);seen.add(item[0]);}
    return {items:chosen.map(([,item])=>item),history:[...seen]};
  }
  const api={PHASES,id,remaining,ranks,finalLimit,canAnswer,canBuzz,Ledger,answerKey,rotatePool};root.MissionCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
