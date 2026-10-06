/* Adapt existing service content to the shared notebook presentation. */
(()=>{
 const paper=document.querySelector('article.paper');if(!paper)return;
 document.body.classList.add('entry-body','kk-feature-page');
 const oldHeader=document.querySelector('.diary-topbar');
 const number=oldHeader?.querySelector('.diary-topbar-note')?.textContent.match(/\d+/)?.[0];
 oldHeader?.remove();
 const wrap=paper.closest('main');wrap.classList.add('entry-wrap');wrap.classList.remove('desk');
 paper.classList.add('entry-page');
 const originalLabel=paper.querySelector('.page-label');
 if(originalLabel){originalLabel.classList.remove('page-label');originalLabel.classList.add('kk-feature-kicker')}
 const label=document.createElement('div');label.className='page-label';label.textContent='Page '+(number||'♡');paper.prepend(label);
 const title=paper.querySelector('h1');if(title)label.after(title);
 paper.querySelector('.nav')?.classList.add('flip-nav');
 paper.querySelector('.all-categories-link')?.classList.add('quick-categories');
 const hero=paper.querySelector('img')?.parentElement;if(hero?.getAttribute('style')?.includes('display:flex'))hero.classList.add('kk-feature-photo');
})();
