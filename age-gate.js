/* Click-through adult-content notice; does not change membership authentication. */
(()=>{
 const key='kkAdultConfirmedForSession';
 const root=document.documentElement;
 let confirmed=false;
 try{confirmed=sessionStorage.getItem(key)==='yes'}catch{}
 if(confirmed){root.classList.remove('kk-age-pending');return}
 root.classList.add('kk-age-pending');
 const showGate=()=>{
  const dialog=document.createElement('div');dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');dialog.id='kk-age-gate';dialog.setAttribute('aria-labelledby','kk-age-title');dialog.setAttribute('aria-describedby','kk-age-description');
  dialog.innerHTML='<div class="kk-age-brand">THE KINKY KOREAN</div><div class="kk-age-mark" aria-hidden="true">♡</div><h1 id="kk-age-title">Are you 18 or older?</h1><p id="kk-age-description">This site contains adult content.<br>You must be 18 or older to enter.</p><div class="kk-age-actions"><button type="button" id="kk-age-enter">Yes, I’m 18 or older — Enter</button><a href="https://www.google.com/" id="kk-age-leave">No — Leave this site</a></div>';
  dialog.style.cssText='position:fixed;z-index:2147483647;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;box-shadow:0 0 0 100vmax #000';
  document.body.append(dialog);
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation()}if(event.key==='Tab'){const controls=[...dialog.querySelectorAll('button,a')];const first=controls[0],last=controls[controls.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});
  dialog.querySelector('#kk-age-enter').addEventListener('click',()=>{
   try{sessionStorage.setItem(key,'yes')}catch{}
   root.classList.remove('kk-age-pending');dialog.remove();
   const heading=document.querySelector('main h1');if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true})}
  });
  dialog.querySelector('#kk-age-enter').focus();
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',showGate,{once:true});else showGate();
})();
