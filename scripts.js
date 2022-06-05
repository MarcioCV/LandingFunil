const btnMobile = document.getElementById('btn-mobile');
const card = document.getElementsByClassName('card_content');
const btnClose = document.getElementById('close_video');
var video = document.getElementById('video_review');
const button_open = document.querySelectorAll('.button_story')
const button_close = document.getElementById('close_video')
console.log(button_open)



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


async function toggleVideo(event){

  if(video.style.display != "flex"){
    console.log("rodou, setado pra flex")
    video.style.display = "flex";
    setTimeout(() =>{
      video.classList.toggle('fade')
    }, 100);
  }
  else{
    console.log("entrou no else")
    video.classList.toggle('fade')
    setTimeout(() =>{
      console.log("rodou, setado pra none")
      video.style.display = "none";
    }, 300);
  }
}



button_open[0].addEventListener('click', toggleVideo)
button_open[1].addEventListener('click', toggleVideo)
button_open[2].addEventListener('click', toggleVideo)
button_open[3].addEventListener('click', toggleVideo)
button_open[4].addEventListener('click', toggleVideo)
button_close.addEventListener('click', toggleVideo)
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);