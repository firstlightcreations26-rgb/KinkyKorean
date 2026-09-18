function openDiary(){
  document.querySelector('.cover').style.display='none';
  const diary=document.getElementById('diary');
  diary.classList.remove('hidden');
  window.scrollTo(0,0);
}
function demoMessage(message){ alert(message); }
function submitCheckin(event){
  event.preventDefault();
  alert("Thank you, gentleman. 💋 Your answers are part of the KK Check-In concept. A real private submission system will be connected when payments/backend are added.");
  document.getElementById('checkin-modal').classList.remove('show');
}
