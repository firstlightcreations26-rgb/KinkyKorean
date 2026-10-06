/* Presentation only: stories, login and membership checks retain their original code. */
(()=>{
 const privatePage=location.pathname.endsWith('/private-entry.html');
 const paper=document.querySelector('.entry-page')||(privatePage?document.querySelector('main.paper'):null);
 if(!paper)return;
 document.body.classList.add('entry-body');paper.classList.add('entry-page');
 if(privatePage){const wrap=document.createElement('div');wrap.className='entry-wrap';paper.before(wrap);wrap.append(paper);document.querySelector('header.top')?.remove()}
 const header=document.createElement('header');header.className='kk-notebook-header';header.setAttribute('aria-label','The Kinky Korean');
 const links=[['kk-header-home','index.html','The Kinky Korean home'],['kk-header-diary','archive.html','Diaries'],['kk-header-voice','voice.html','KK’s Voice'],['kk-header-extras','private.html','Extras']];
 for(const [cls,href,label] of links){const a=document.createElement('a');a.className=cls;a.href=href;a.setAttribute('aria-label',label);header.append(a)}
 document.body.prepend(header);
 const clip=document.createElement('span');clip.className='kk-paperclip';clip.setAttribute('aria-hidden','true');paper.prepend(clip);
 const kiss=document.createElement('div');kiss.className='kk-kiss';kiss.setAttribute('aria-hidden','true');paper.append(kiss);
 const label=paper.querySelector('.page-label')||paper.querySelector('#label');
 if(label)label.classList.add('page-label');
 const number=privatePage?Number(new URLSearchParams(location.search).get('entry')):Number(location.pathname.match(/entry[-.]?(\d+)/)?.[1]);
 const bottom=document.createElement('div');bottom.className='kk-notebook-bottom';document.querySelector('.entry-wrap').after(bottom);
 let nav=paper.querySelector('.flip-nav');
 if(!nav&&privatePage&&Number.isInteger(number)&&number>=2&&number<=999){nav=document.createElement('nav');nav.className='flip-nav';const prev=document.createElement('a');prev.href=number===2?'entry-001.html':'private-entry.html?entry='+String(number-1).padStart(3,'0');prev.textContent='← Previous';const page=document.createElement('span');page.textContent='PAGE '+String(number).padStart(2,'0');const next=document.createElement('a');next.href='private-diary.html';next.textContent='My private pages →';nav.append(prev,page,next)}
 if(nav)bottom.append(nav);
 const strip=document.createElement('div');strip.className='kk-access-strip';bottom.append(strip);
 if(privatePage){strip.textContent='🔒 MEMBERS’ DIARY ♡'}else{const free=/\bFREE\b/i.test(label?.textContent||'');strip.textContent=free?'THIS ENTRY IS FREE — WELCOME TO MY DIARY ♡':'🔒 THIS DIARY PAGE IS LOCKED ♡';if(label&&number)label.textContent='Page '+String(number).padStart(2,'0')}
 for(const el of paper.querySelectorAll('.kk-tip-wrap,.quick-categories'))bottom.append(el);
 if(privatePage){const observer=new MutationObserver(()=>{if(label&&/^ENTRY #/.test(label.textContent))label.textContent='Page '+String(number).padStart(2,'0')});if(label)observer.observe(label,{childList:true,characterData:true,subtree:true})}
})();
