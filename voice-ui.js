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

const fullVoiceEntries=[{"path":"Venting.m4a","title":"Venting","duration":"5:41"},{"path":"Soccer teams.m4a","title":"Soccer teams","duration":"3:07"},{"path":"Yikes this is hard.m4a","title":"Yikes this is hard","duration":"2:43"},{"path":"Be memorable.m4a","title":"Be memorable","duration":"2:25"},{"path":"Sex sex sex.m4a","title":"Sex sex sex","duration":"2:10"}];
const fullTitle=document.createElement('h2'); fullTitle.textContent='MY FULL VOICE ENTRIES'; fullTitle.style.cssText='font-size:18px;margin:26px 0 10px'; clipList.append(fullTitle);
for(const entry of fullVoiceEntries) {
 const row=document.createElement('div'); row.className='voice-clip'; row.style.cssText='margin:14px 0;padding:12px;border:1px solid #e9b9cc;border-radius:12px';
 const title=document.createElement('strong'); title.textContent=entry.title+' · '+entry.duration;
 const button=document.createElement('button'); button.className='voice-unlock'; button.type='button'; button.dataset.voicePath=entry.path; button.textContent='Play full entry';
 const player=document.createElement('audio'); player.controls=true; player.preload='none'; player.hidden=true; player.style.cssText='max-width:100%;margin-top:8px';
 const status=document.createElement('small'); status.className='voice-clip-status'; status.setAttribute('aria-live','polite');
 row.append(title,document.createElement('br'),button,document.createElement('br'),player,status); clipList.append(row);
}
