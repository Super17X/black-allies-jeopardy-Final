(() => {
    const CHANNEL_NAME = "trivia-buzzer-channel";
    const STORAGE_KEY  = "trivia-buzzer-state";
    let bc=null;
    const realtimeConfig = window.JEOPARDY_CONFIG || {};
    const realtimeEnabled = !!(realtimeConfig.supabaseUrl && realtimeConfig.supabaseAnonKey && window.supabase);
    const roomCode = (new URLSearchParams(location.search).get("room") || "").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8);
    bc=typeof BroadcastChannel!=="undefined"?new BroadcastChannel(CHANNEL_NAME+"-"+roomCode):null;
    const $=id=>document.getElementById(id);
    let realtimeChannel = null;
    let realtimeReady = false;
    let outboundQueue = [];


    const loginSection  = document.getElementById("loginSection");
    const buzzerSection = document.getElementById("buzzerSection");
    const nameInput     = document.getElementById("nameInput");
    const loginError    = document.getElementById("loginError");
    const joinBtn       = document.getElementById("joinBtn");
    const leaveBtn      = document.getElementById("leaveBtn");
    const buzzerBtn     = document.getElementById("buzzerBtn");
    const playerLabel   = document.getElementById("playerLabel");
    const questionInfo  = document.getElementById("questionInfo");
    const statusMsg     = document.getElementById("statusMsg");
    const answerArea    = document.getElementById("answerArea");
    const remoteAnswerInput = document.getElementById("remoteAnswerInput");
    const submitAnswerBtn = document.getElementById("submitAnswerBtn");
    const buzzerFlash   = document.getElementById("buzzerFlash");
    const flashLabel    = buzzerFlash.querySelector(".flash-label");
    const roomLabel     = document.getElementById("roomLabel");
    const controlBanner = document.getElementById("controlBanner");
    const mobileBoard = document.getElementById("mobileBoard");
    const mobileBoardGrid = document.getElementById("mobileBoardGrid");
    const finalMobile = document.getElementById("finalMobile");
    const finalCategoryMobile = document.getElementById("finalCategoryMobile");
    const finalClueMobile = document.getElementById("finalClueMobile");
    const finalWagerInput = document.getElementById("finalWagerInput");
    const finalWagerBtn = document.getElementById("finalWagerBtn");
    const finalAnswerInput = document.getElementById("finalAnswerInput");
    const finalAnswerBtn = document.getElementById("finalAnswerBtn");
    const finalStatusMobile = document.getElementById("finalStatusMobile");
    roomLabel.textContent = roomCode ? `Room: ${roomCode}` : "Room code missing";


    let playerName = null;
    let audioCtx = null;
    function playBuzzSound() {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      audioCtx = audioCtx || new Ctx();
      const t = audioCtx.currentTime;
      [392, 262].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "square"; osc.frequency.value = freq;
        gain.gain.setValueAtTime(.0001, t + i * .13);
        gain.gain.exponentialRampToValueAtTime(.12, t + i * .13 + .01);
        gain.gain.exponentialRampToValueAtTime(.0001, t + i * .13 + .16);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(t + i * .13); osc.stop(t + i * .13 + .18);
      });
    }


    // ---- Flash animation ----
    function triggerBuzzerFlash() {
      buzzerFlash.style.background = "rgba(247,201,72,0.5)";
      buzzerFlash.style.opacity = "1";
      flashLabel.style.opacity = "1";
      flashLabel.style.transform = "scale(1.2)";
      setTimeout(() => {
        buzzerFlash.style.opacity = "0";
        flashLabel.style.opacity = "0";
        flashLabel.style.transform = "scale(.4)";
        setTimeout(() => { buzzerFlash.style.background = "rgba(247,201,72,0)"; }, 200);
      }, 600);
    }


    // ---- Send message to host ----
    function flushRealtimeQueue(){
      if(!realtimeReady || !realtimeChannel) return;
      const pending = outboundQueue.splice(0);
      pending.forEach(msg => realtimeChannel.send({type:"broadcast",event:"message",payload:msg}));
    }

    function sendToHost(msg){playerWire(msg);}



    function sameName(a,b){ return String(a||"").trim().toLowerCase()===String(b||"").trim().toLowerCase(); }
    function renderMobileBoard(data){
      if(!data || !Array.isArray(data.categories) || !Array.isArray(data.rows)) return;
      controlBanner.textContent=`In control: ${data.controller || "—"}`;
      mobileBoard.style.display=data.boardVisible?"block":"none";
      mobileBoardGrid.innerHTML="";
      mobileBoardGrid.style.gridTemplateColumns=`repeat(${data.categories.length}, minmax(72px,1fr))`;
      data.categories.forEach(cat=>{ const h=document.createElement("div"); h.className="mcat"; h.textContent=cat; mobileBoardGrid.appendChild(h); });
      data.rows.forEach(r=>data.categories.forEach(cat=>{
        const b=document.createElement("button"); b.className="mclue"; b.textContent=`$${r.value}`;
        const key=`${cat}::${r.row}`;
        const used=(data.used||[]).some(k=>String(k).startsWith(key+"::") || k===key);
        b.disabled=used || !sameName(playerName,data.controller);
        if(!used) b.addEventListener("click",()=>{ sendToHost({type:"select-clue",player:playerName,category:cat,row:r.row}); });
        mobileBoardGrid.appendChild(b);
      }));
    }

    // ---- Listen for messages from host ----
    function handleHostMessage(data) {
      if (!data || !data.type) return;

      if(data.type === "board-state"){ renderMobileBoard(data); }
      if(data.type === "control-update"){ controlBanner.textContent=`In control: ${data.controller || "—"}`; }
      if(data.type === "selection-denied" && sameName(data.player,playerName)){ statusMsg.textContent=data.reason||"Selection not allowed."; statusMsg.className="err"; }

      if(data.type === "final-wager"){
        mobileBoard.style.display="none"; buzzerBtn.disabled=true; answerArea.style.display="none"; finalMobile.style.display="block";
        finalCategoryMobile.textContent=`Final Jeopardy Category: ${data.category}`; finalClueMobile.textContent="Submit your wager. The clue will appear after all wagers are locked.";
        const score=(data.scores||{})[playerName]; if(Number.isFinite(score)) finalWagerInput.max=String(Math.max(0,score));
        finalWagerInput.style.display="block"; finalWagerBtn.style.display="inline-block"; finalWagerBtn.disabled=false;
        finalAnswerInput.style.display="none"; finalAnswerBtn.style.display="none"; finalStatusMobile.textContent="";
      }
      if(data.type === "final-wager-ack" && sameName(data.player,playerName)){ finalWagerBtn.disabled=true; finalWagerInput.style.display="none"; finalStatusMobile.textContent="✅ Wager locked. Waiting for the other players…"; }
      if(data.type === "final-answer"){
        finalMobile.style.display="block"; finalCategoryMobile.textContent=`Final Jeopardy Category: ${data.category}`; finalClueMobile.textContent=data.clue||"";
        finalWagerInput.style.display="none"; finalWagerBtn.style.display="none"; finalAnswerInput.style.display="block"; finalAnswerBtn.style.display="inline-block"; finalAnswerBtn.disabled=false; finalStatusMobile.textContent="Enter your Final Jeopardy answer.";
      }
      if(data.type === "final-answer-ack" && sameName(data.player,playerName)){ finalAnswerBtn.disabled=true; finalAnswerInput.style.display="none"; finalStatusMobile.textContent="✅ Final answer submitted. Waiting for reveal…"; }
      if(data.type === "final-error" && sameName(data.player,playerName)){ finalStatusMobile.textContent=data.message||"Please check your entry."; }
      if(data.type === "final-wait-reveal"){ finalStatusMobile.textContent="All answers are in. Waiting for the host to reveal results…"; }
      if(data.type === "final-results"){ finalStatusMobile.textContent=`Accepted answer: ${data.accepted || "—"}`; }

      if (data.type === "question-start") {
        if(data.controller) controlBanner.textContent=`In control: ${data.controller}`;
        mobileBoard.style.display="none";
        questionInfo.textContent = data.category
          ? `Category: ${data.category} | $${data.value} — ${data.clue || ""}`
          : (data.clue || "Question active!");
        buzzerBtn.disabled = false;
        statusMsg.textContent = "Tap the buzzer to answer!";
        statusMsg.className = "";
        answerArea.style.display = "none";
        remoteAnswerInput.value = "";
        submitAnswerBtn.disabled = false;
      }


      if (data.type === "question-end") {
        buzzerBtn.disabled = true;
        questionInfo.textContent = "Waiting for next question…";
        statusMsg.textContent = "";
        answerArea.style.display = "none";
      }


      if (data.type === "buzz-ack" && data.player === playerName) {
        statusMsg.textContent = "✅ You buzzed in first! Answer now.";
        statusMsg.className = "ok";
        triggerBuzzerFlash();
        answerArea.style.display = "block";
        setTimeout(()=>remoteAnswerInput.focus(),100);
      }


      if (data.type === "buzz-denied" && data.player === playerName) {
        statusMsg.textContent = "⚡ Someone else buzzed first.";
        statusMsg.className = "err";
        answerArea.style.display = "none";
      }

      if (data.type === "answer-received" && data.player === playerName) {
        statusMsg.textContent = "✅ Answer submitted to the host.";
        statusMsg.className = "ok";
        answerArea.style.display = "none";
      }

      if (data.type === "answer-denied" && data.player === playerName) {
        statusMsg.textContent = "Answer was not accepted. Wait for your next chance to buzz.";
        statusMsg.className = "err";
        answerArea.style.display = "none";
      }


      if (data.type === "join-ack" && data.player === playerName) {
        if (data.registered) {
          const displayName = data.canonicalPlayer || data.player;
          statusMsg.textContent = data.added
            ? `✅ ${displayName} was added to the game. You are ready to buzz.`
            : `✅ Connected as ${displayName}. You are ready to buzz.`;
          statusMsg.className = "ok";
        } else {
          statusMsg.textContent = "Enter a valid player name to join.";
          statusMsg.className = "err";
        }
      }
    }


    if(realtimeEnabled && roomCode){
      const client = window.supabase.createClient(realtimeConfig.supabaseUrl, realtimeConfig.supabaseAnonKey);
      realtimeChannel = client.channel(`jeopardy-${roomCode}`, {config:{broadcast:{self:false}}});
      realtimeChannel.on("broadcast", {event:"message"}, ({payload}) => receiveHost(payload));
      realtimeChannel.subscribe(status => {
        realtimeReady=status==="SUBSCRIBED";
        if(status === "SUBSCRIBED"){
          realtimeReady = true;
          flushRealtimeQueue();
          if(!playerName) loginError.textContent = "";
          else sendToHost({type:"join",player:playerName});
        }
      });
    } else if (bc) {
      bc.addEventListener("message", (e) => receiveHost(e.data));
    }

    window.addEventListener("storage", (e) => {
      if(realtimeEnabled) return;
      if (e.key === STORAGE_KEY + "-to-buzzer-"+roomCode) {
        try { receiveHost(JSON.parse(e.newValue)); } catch(_) {}
      }
    });


    // ---- Join ----
    function join() {
      const name = (nameInput.value || "").trim();
      if (!name) { loginError.textContent = "Please enter your name."; return; }
      if (!roomCode) { loginError.textContent = "This buzzer link is missing its room code. Scan the host QR code again."; return; }
      if (!realtimeEnabled && location.protocol !== "file:") { loginError.textContent = "Online relay is not configured. The host must complete config.js first."; return; }
      loginError.textContent = "";
      playerName = name;


      loginSection.style.display = "none";
      buzzerSection.style.display = "flex";
      playerLabel.textContent = name;
      statusMsg.textContent = "Connecting…";


      sendToHost({ type: "join", player: name });
    }


    joinBtn.addEventListener("click", join);
    nameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") join(); });


    // ---- Leave ----
    leaveBtn.addEventListener("click", () => {
      sendToHost({ type: "leave", player: playerName });
      try{sessionStorage.removeItem("mission-name-"+roomCode);}catch{}
      playerName = null;registeredId=null;currentGame=null;lastSnapshot=null;pendingMessages.clear();
      buzzerSection.style.display = "none";
      loginSection.style.display = "block";
      nameInput.value = "";
      statusMsg.textContent = "";
      questionInfo.textContent = "Waiting for a question…";
      buzzerBtn.disabled = true;
      answerArea.style.display = "none";
    });


    // ---- Buzz ----
    buzzerBtn.addEventListener("click", () => {
      if (!playerName || buzzerBtn.disabled) return;
      playBuzzSound();
      buzzerBtn.classList.add("pressed");
      setTimeout(() => buzzerBtn.classList.remove("pressed"), 200);
      sendToHost({ type: "buzz", player: playerName });
      statusMsg.textContent = "Buzzed! Waiting for host…";
      buzzerBtn.disabled = true;
    });

    let submittedQuestion=null;
    function submitRemoteAnswer(){
      const answer=(remoteAnswerInput.value||"").trim();
      if(!playerName || !answer || submitAnswerBtn.disabled){
        statusMsg.textContent="Please type an answer first.";
        statusMsg.className="err";
        return;
      }
      submittedQuestion=currentQuestion;submitAnswerBtn.disabled=true;remoteAnswerInput.disabled=true;
      sendToHost({type:"answer",player:playerName,answer});
      statusMsg.textContent="Sending answer to host…";
      statusMsg.className="";
    }
    submitAnswerBtn.addEventListener("click",submitRemoteAnswer);
    remoteAnswerInput.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.isComposing) submitRemoteAnswer();});


    finalWagerBtn.addEventListener("click",()=>{
      if(finalWagerBtn.disabled)return;
      const wager=String(finalWagerInput.value||"").trim();
      if(!/^\d+$/.test(wager)){ finalStatusMobile.textContent="Enter a whole-dollar wager."; return; }
      sendToHost({type:"final-wager-submit",player:playerName,wager}); finalWagerBtn.disabled=true; finalStatusMobile.textContent="Sending wager…";
    });
    finalAnswerBtn.addEventListener("click",()=>{
      if(finalAnswerBtn.disabled)return;
      sendToHost({type:"final-answer-submit",player:playerName,answer:String(finalAnswerInput.value||"").trim()}); finalAnswerBtn.disabled=true; finalStatusMobile.textContent="Sending final answer…";
    });
    finalAnswerInput.addEventListener("keydown",e=>{if(e.key==="Enter") finalAnswerBtn.click();});

    // Touch events for better mobile responsiveness
    buzzerBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      buzzerBtn.click();
    }, { passive: false });


    let clientId;try{clientId=sessionStorage.getItem('mission-client-'+roomCode);if(!clientId){clientId=MissionCore.id();sessionStorage.setItem('mission-client-'+roomCode,clientId);}}catch{clientId=MissionCore.id();}
    let registeredId=null,currentGame=null,currentQuestion=null,lastRevision=-1,clockOffset=0,lastSnapshotAt=0,lastSnapshot=null,lastLatency=0;
    const pendingMessages=new Map();
    function playerWire(msg){msg={...msg,room:roomCode,clientId,id:msg.id||MissionCore.id(),gameId:currentGame,questionId:currentQuestion,sentAt:Date.now()};if(!['heartbeat','sync-request'].includes(msg.type))pendingMessages.set(msg.id,{msg,tries:1,last:Date.now()});rawSend(msg);}
    function rawSend(msg){if(realtimeEnabled&&realtimeChannel){if(!realtimeReady){if(outboundQueue.length<100)outboundQueue.push(msg);return;}realtimeChannel.send({type:'broadcast',event:'message',payload:msg});return;}if(bc)bc.postMessage(msg);try{localStorage.setItem(STORAGE_KEY+'-to-host-'+roomCode,JSON.stringify(msg));}catch{}}
    function receiveHost(data){if(!data||data.room!==roomCode||!data.host||data.targetId&&data.targetId!==clientId)return;
      if(data.type==='receipt'){const item=pendingMessages.get(data.ackId);if(item){lastLatency=Date.now()-item.msg.sentAt;clockOffset=data.serverNow-(item.msg.sentAt+Date.now())/2;pendingMessages.delete(data.ackId);}return;}
      if(data.type==='join-ack'&&data.registered){registeredId=data.playerId;currentGame=data.gameId;playerName=data.canonicalPlayer||playerName;try{sessionStorage.setItem('mission-name-'+roomCode,playerName);}catch{}}
      if(data.type==='snapshot'){applySnapshot(data);return;}
      // Snapshot owns gameplay display; acknowledgments provide immediate feedback only.
      if(['question-start','question-end','board-state','final-answer','final-wager'].includes(data.type))return;
      handleHostMessage(data);
      if(data.type==='answer-denied'){submittedQuestion=null;remoteAnswerInput.disabled=false;submitAnswerBtn.disabled=false;}
      if(data.type==='final-error'){finalWagerBtn.disabled=false;finalAnswerBtn.disabled=false;}
      if(data.type==='join-ack'&&!data.registered){loginSection.style.display='block';buzzerSection.style.display='none';loginError.textContent=data.reason||'Name already in use.';playerName=null;}
    }
    function applySnapshot(data){if(!playerName)return;const previousQuestion=currentQuestion,previousPhase=lastSnapshot?.phase;if(data.gameId!==currentGame){lastRevision=-1;currentGame=data.gameId;currentQuestion=data.questionId;}
      if(data.revision<=lastRevision)return;lastRevision=data.revision;lastSnapshot=data;lastSnapshotAt=Date.now();currentQuestion=data.questionId;
      if(!registeredId){const p=(data.scores||[]).find(p=>sameName(p.name,playerName));if(p)registeredId=p.id;}
      if(previousQuestion!==data.questionId||(previousPhase==='debrief'&&['answering','steal-answering'].includes(data.phase))){submittedQuestion=null;remoteAnswerInput.value='';}document.body.dataset.playerPhase=data.phase;
      $('phonePhase').textContent=data.phase.replace(/-/g,' ').toUpperCase();$('phoneConnection').textContent='CONNECTED';$('phoneLatency').textContent=lastLatency+'ms relay';$('phoneGuileMessage').textContent=data.guile||'';
      $('phoneScores').innerHTML=(data.scores||[]).map(p=>`<div class="phone-rank"><strong>${p.rank}</strong><span>${escapeMobile(p.name)}</span><b>$${Number(p.score).toLocaleString()}</b></div>`).join('');
      const P=MissionCore.PHASES,controller=data.controllerId===registeredId,canAnswer=MissionCore.canAnswer(data.phase,data.controllerId,registeredId,data.paused),canBuzz=MissionCore.canBuzz(data.phase,data.attempted||[],registeredId,data.paused);
      $('phoneReady').style.display=[P.LOBBY,P.BRIEFING].includes(data.phase)?'block':'none';$('phoneReady').textContent=data.scores.find(p=>p.id===registeredId)?.ready?'Ready ✓ — tap to cancel':'Mark ready';
      controlBanner.textContent='In command: '+(data.controller||'—');buzzerBtn.disabled=!canBuzz;buzzerBtn.textContent=canBuzz?'BUZZ TO STEAL':data.paused?'PAUSED':'STAND BY';answerArea.style.display=canAnswer?'block':'none';submitAnswerBtn.disabled=!canAnswer||submittedQuestion===currentQuestion;remoteAnswerInput.disabled=!canAnswer||submittedQuestion===currentQuestion;if(canAnswer&&submittedQuestion!==currentQuestion&&previousQuestion!==data.questionId)remoteAnswerInput.focus({preventScroll:true});$('phonePass').disabled=!canAnswer;
      if(data.question)questionInfo.textContent=data.question.category+' • '+data.question.value+' — '+data.question.text;else questionInfo.textContent='Waiting for the next objective';
      if(data.board)renderMobileBoard(data.board);mobileBoard.style.display=data.phase===P.BOARD?'block':'none';
      finalMobile.style.display=[P.FINAL_WAGER,P.FINAL_ANSWER,P.FINAL_REVEAL,P.RESULTS].includes(data.phase)?'block':'none';
      if(data.phase===P.FINAL_WAGER){const p=data.scores.find(p=>p.id===registeredId),locked=data.final.wagered.includes(registeredId);finalWagerInput.max=String(MissionCore.finalLimit(p?.score));finalWagerInput.style.display=locked?'none':'block';finalWagerBtn.style.display='inline-block';finalWagerBtn.disabled=locked;finalAnswerInput.style.display='none';finalAnswerBtn.style.display='none';finalCategoryMobile.textContent=data.final.category;finalClueMobile.textContent='Lock your secret wager. Maximum $'+MissionCore.finalLimit(p?.score);finalStatusMobile.textContent=locked?'Wager locked. Waiting for the squad.':'';}
      if(data.phase===P.FINAL_ANSWER){const answered=data.final.answered.includes(registeredId);finalCategoryMobile.textContent=data.final.category;finalClueMobile.textContent=data.final.clue;finalWagerInput.style.display='none';finalWagerBtn.style.display='none';finalAnswerInput.style.display=answered?'none':'block';finalAnswerBtn.style.display='inline-block';finalAnswerBtn.disabled=answered||data.paused;finalStatusMobile.textContent=answered?'Answer locked. Waiting for reveal.':data.paused?'Final timer paused.':'Submit your private final answer.';}
      if([P.FINAL_REVEAL,P.RESULTS].includes(data.phase)){finalAnswerInput.style.display='none';finalWagerInput.style.display='none';finalAnswerBtn.disabled=true;finalWagerBtn.disabled=true;finalStatusMobile.textContent=data.phase===P.RESULTS?'Mission complete. Final rankings are shown below.':'Answers locked. Waiting for the host reveal.';}
      if(data.phase===P.DEBRIEF&&data.debrief)questionInfo.textContent='TRAINING REVIEW: '+data.debrief.explanation;
      statusMsg.textContent=data.paused?'Host paused the clock.':canAnswer?'You have command. Answer directly or pass.':canBuzz?'Steal window open. Buzz now.':data.phase===P.STEAL_ANSWER?'Another player claimed this steal.':'Stand by for your next objective.';
    }
    function escapeMobile(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
    function initializeController(){
      $('phoneReady').onclick=()=>{const p=lastSnapshot?.scores.find(p=>p.id===registeredId);playerWire({type:'ready',player:playerName,ready:!p?.ready});};
      $('phonePass').onclick=()=>{if(playerName)playerWire({type:'pass',player:playerName});};
      setInterval(()=>{const now=Date.now();for(const [id,item]of pendingMessages){if(now-item.last<2000)continue;if(item.tries>=5){pendingMessages.delete(id);statusMsg.textContent='No host acknowledgment. Reconnecting; request sync and try again.';playerWire({type:'sync-request',player:playerName});continue;}item.tries++;item.last=now;rawSend(item.msg);}
        if(playerName&&lastSnapshotAt&&now-lastSnapshotAt>7000){$('phoneConnection').textContent='RECONNECTING';buzzerBtn.disabled=true;submitAnswerBtn.disabled=true;finalAnswerBtn.disabled=true;playerWire({type:'sync-request',player:playerName});}
      },1000);
      setInterval(()=>{if(playerName)playerWire({type:'heartbeat',player:playerName});},5000);
      setInterval(()=>{const s=lastSnapshot;if(!s)return;const d=s.phase==='final-answer'?s.finalDeadline:s.deadline;const remaining=s.paused?s.remaining:d?MissionCore.remaining(d,Date.now()+clockOffset):0;$('phoneTimer').textContent=d||s.paused?remaining+'s'+(s.paused?' PAUSED':''):'—';},200);
      try{const saved=sessionStorage.getItem('mission-name-'+roomCode);if(saved){nameInput.value=saved;join();}}catch{}
      $('requestSync').onclick=()=>{if(playerName)playerWire({type:'sync-request',player:playerName});};
    }

    initializeController();
  })();
  