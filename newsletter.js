(()=>{
 const footer=document.querySelector('footer');
 if(!footer||document.getElementById('kk-newsletter'))return;
 const section=document.createElement('section');section.className='kk-newsletter';section.id='kk-newsletter';section.setAttribute('aria-labelledby','kk-email-heading');
 section.innerHTML='<h2 id="kk-email-heading">A new page. A little heads-up.</h2><p>Join my email list for new diary posts and occasional updates.</p><form><label for="kk-signup-email">Your email</label><div class="kk-email-row"><input id="kk-signup-email" name="email" type="email" autocomplete="email" maxlength="254" required placeholder="you@example.com"><button type="submit">Keep me posted</button></div><label class="kk-email-consent"><input type="checkbox" name="consent" required><span>Email me new diary posts and occasional updates from The Kinky Korean.</span></label><label class="kk-email-trap" aria-hidden="true">Leave this empty<input name="website" tabindex="-1" autocomplete="off"></label><p class="kk-newsletter-note">18+ only. Opt out anytime by emailing <a href="mailto:info@kinkykorean.blog">info@kinkykorean.blog</a>. <a href="privacy.html">Privacy</a></p><p class="kk-email-status" role="status" aria-live="polite"></p></form>';
 footer.prepend(section);
 const form=section.querySelector('form'),status=section.querySelector('.kk-email-status'),button=form.querySelector('button');
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(!form.reportValidity())return;
  if(form.elements.website.value)return;
  const email=form.elements.email.value.trim().toLowerCase();
  button.disabled=true;status.textContent='Saving your signup…';
  try{
   const response=await fetch('https://zeeghkticnftmzslbzrc.supabase.co/rest/v1/newsletter_subscribers',{method:'POST',headers:{apikey:'sb_publishable_c1bDYHzjRzuVrW9DePRo2A_Tn4i5lOO','Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({email,consent:true,source:location.pathname.slice(0,200)})});
   if(!response.ok){const error=await response.json().catch(()=>({}));if(error.code!=='23505')throw new Error('signup failed')}
   status.textContent='You’re on the list. Thanks for reading!';form.reset();
  }catch(error){status.textContent='Couldn’t save your email. Please try again.'}
  finally{button.disabled=false}
 });
})();
