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
  const api={PHASES,id,remaining,ranks,finalLimit,canAnswer,canBuzz,Ledger};root.MissionCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
