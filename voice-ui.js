const voiceBox=document.createElement('div');
voiceBox.className='listen-moment';
voiceBox.style.margin='24px 0';
voiceBox.innerHTML='<div class="listen-label">🎧 MY VOICE CLIPS</div><p id="voice-status" aria-live="polite">Checking your access…</p><p><a class="voice-unlock" href="member-login.html">Sign in to listen</a></p><div id="voice-clips" hidden></div>';
document.querySelector('.voice-list').before(voiceBox);
const clipList=document.getElementById('voice-clips');
for(let i=1;i<=8;i++) {
  const n=String(i).padStart(2,'0');
  const row=document.createElement('div'); row.className='voice-clip';
  row.style.cssText='margin:14px 0;padding:12px;border:1px solid #e9b9cc;border-radius:12px';
  row.innerHTML='<strong>LISTEN '+n+'</strong><br><button class="voice-unlock" type="button" data-voice-path="listen-'+n+'.mp3">Play clip</button><br><audio controls preload="none" hidden style="max-width:100%;margin-top:8px"></audio><small class="voice-clip-status" aria-live="polite"></small>';
  clipList.append(row);
}
