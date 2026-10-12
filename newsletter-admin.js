(()=>{
 const section=document.getElementById('newsletterAdmin');if(!section)return;
 const status=document.getElementById('subscriberStatus'),list=document.getElementById('subscriberList'),exportButton=document.getElementById('exportSubscribers');let subscribers=[];
 async function load(){
  const {data:{user}}=await db.auth.getUser();if(user?.email?.toLowerCase()!=='kinkykorean26@gmail.com')return;
  const {data,error}=await db.from('newsletter_subscribers').select('id,email,created_at,source').order('created_at',{ascending:false});
  if(error){status.textContent='Could not load email signups.';exportButton.disabled=true;return}
  subscribers=data||[];status.textContent=subscribers.length+' email signup(s).';exportButton.disabled=!subscribers.length;list.replaceChildren();
  for(const signup of subscribers){
   const row=document.createElement('div');row.className='card';const text=document.createElement('p');text.textContent=signup.email+' · '+new Date(signup.created_at).toLocaleDateString();row.append(text);
   const remove=document.createElement('button');remove.type='button';remove.textContent='Remove from list';remove.onclick=async()=>{remove.disabled=true;const {error}=await db.from('newsletter_subscribers').delete().eq('id',signup.id);if(error){status.textContent='Could not remove that signup.';remove.disabled=false}else await load()};row.append(remove);list.append(row);
  }
 }
 exportButton.onclick=()=>{
  const csvCell=value=>{let s=String(value||'');if(/^[=+\-@]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'};
  const csv='email,signup_date,source\r\n'+subscribers.map(s=>[s.email,s.created_at,s.source].map(csvCell).join(',')).join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='kinky-korean-email-signups.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 };
 document.getElementById('refreshSubscribers').onclick=load;db.auth.onAuthStateChange(()=>setTimeout(load,0));load();
})();
