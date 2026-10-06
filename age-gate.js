/* Click-through adult-content notice; does not change membership authentication. */
(()=>{
 const key='kkAdultConfirmedForSession';
 const root=document.documentElement;
 let confirmed=false;
 try{confirmed=sessionStorage.getItem(key)==='yes'}catch{}
 if(confirmed){root.classList.remove('kk-age-pending');return}
 root.classList.add('kk-age-pending');
 const showGate=()=>{
  const dialog=document.createElement('dialog');dialog.id='kk-age-gate';dialog.setAttribute('aria-labelledby','kk-age-title');dialog.setAttribute('aria-describedby','kk-age-description');
  dialog.innerHTML='<div class="kk-age-brand">THE KINKY KOREAN</div><div class="kk-age-mark" aria-hidden="true">♡</div><h1 id="kk-age-title">Are you 18 or older?</h1><p id="kk-age-description">This site contains adult content.<br>You must be 18 or older to enter.</p><div class="kk-age-actions"><button type="button" id="kk-age-enter">Yes, I’m 18 or older — Enter</button><a href="https://www.google.com/" id="kk-age-leave">No — Leave this site</a></div>';
  document.body.append(dialog);
  dialog.addEventListener('cancel',event=>event.preventDefault());
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation()}});
  dialog.addEventListener('close',()=>{if(root.classList.contains('kk-age-pending')&&dialog.isConnected)dialog.showModal()});
  dialog.querySelector('#kk-age-enter').addEventListener('click',()=>{
   try{sessionStorage.setItem(key,'yes')}catch{}
   root.classList.remove('kk-age-pending');dialog.close();dialog.remove();
   const heading=document.querySelector('main h1');if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true})}
  });
  dialog.showModal();
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',showGate,{once:true});else showGate();
})();
