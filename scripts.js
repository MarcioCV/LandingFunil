const btnMobile = document.getElementById('btn-mobile');
const card = document.getElementsByClassName('card_content');
const btnClose = document.getElementById('close_video');
var video = document.getElementById('video_review');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}


function toggleVideo(event) {
  console.log(video.style.display)
  if(video.style.display == "none"){
    video.style.display = "flex";
  }
  else{
    video.style.display = "none";
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);