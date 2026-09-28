const kkVoiceClient = supabase.createClient('https://zeeghkticnftmzslbzrc.supabase.co','sb_publishable_c1bDYHzjRzuVrW9DePRo2A_Tn4i5lOO');
async function kkLoadVoiceAccess() {
  const status = document.getElementById('voice-status');
  const clips = document.getElementById('voice-clips');
  const {data:{session},error} = await kkVoiceClient.auth.getSession();
  if (error || !session) { status.textContent = 'Already have Unfiltered Access? Sign in to listen.'; clips.hidden = true; return; }
  const {data,error:accessError} = await kkVoiceClient.from('member_access').select('id').eq('user_id',session.user.id).eq('access_level','unfiltered').eq('active',true).lte('starts_at',new Date().toISOString()).gt('expires_at',new Date().toISOString()).limit(1);
  if (accessError || !data?.length) { status.textContent = 'Your Unfiltered Access is locked or expired.'; clips.hidden = true; return; }
  status.textContent = 'Your Unfiltered Access is active. Choose a clip below. ♡'; clips.hidden = false;
}
document.querySelectorAll('[data-voice-path]').forEach(button => button.addEventListener('click',async () => {
  const row=button.closest('.voice-clip'), player=row.querySelector('audio'), message=row.querySelector('.voice-clip-status');
  button.disabled=true; message.textContent='Getting your private listening link…';
  try {
    const {data:{session}}=await kkVoiceClient.auth.getSession();
    if (!session) throw new Error('Please sign in to listen.');
    const {data,error}=await kkVoiceClient.functions.invoke('bunny-signed-url',{body:{path:button.dataset.voicePath}});
    if (error || !data?.url) throw new Error('This clip could not be opened. Please try again.');
    player.src=data.url; player.hidden=false; player.load(); message.textContent='';
    await player.play().catch(()=>{message.textContent='Tap play on the audio control to listen.';});
  } catch(e) { message.textContent=e.message; }
  finally { button.disabled=false; }
}));
kkVoiceClient.auth.onAuthStateChange(()=>setTimeout(kkLoadVoiceAccess,0)); kkLoadVoiceAccess();
