/* Presentation only. Keep existing form handlers and payment destinations. */
(()=>{
 const old=document.querySelector('.all-categories-link');
 if(old){
  const section=document.createElement('section');section.className='quick-categories';section.setAttribute('aria-label','Jump to a page');
  const card=document.createElement('div');card.className='quick-categories-card';
  const heading=document.createElement('div');heading.className='quick-categories-kicker';heading.textContent='Jump to a page';
  const links=document.createElement('div');links.className='quick-category-links';
  for(const [href,text] of [['entry-001.html','Diary Pages'],['voice.html','KK Voice'],['private.html','Private Extras'],['wishlist.html','Payment Info'],['virtual-kk.html','Virtual KK'],['dear-kk.html','Dear KK'],['check-in.html','KK Check-In']]){const a=document.createElement('a');a.href=href;const span=document.createElement('span');span.textContent=text;a.append(span);links.append(a)}
  card.append(heading,links);section.append(card);old.replaceWith(section);
 }
 const footer=document.querySelector('footer');
 if(footer){footer.classList.add('kk-service-footer');footer.replaceChildren();const copy=document.createElement('div');copy.textContent='© 2026 The Kinky Korean (KK). All rights reserved. · 18+ only.';const nav=document.createElement('nav');nav.setAttribute('aria-label','Site policies');for(const [href,text] of [['terms.html','Copyright & Terms'],['privacy.html','Privacy'],['refund-policy.html','Purchase & Refund Policy'],['disclaimer.html','18+ Disclaimer']]){const a=document.createElement('a');a.href=href;a.textContent=text;nav.append(a)}footer.append(copy,nav)}
})();
