const btnMobile = document.getElementById('btn-mobile');
const card = document.getElementsByClassName('card_content');
var videos = document.querySelectorAll('.div_review_video');
const button_open = document.querySelectorAll('.button_story')
const button_close = document.querySelectorAll('.close_video')

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

function toggleVideo(i){
  if(videos[i].style.display != "flex"){
    videos[i].style.display = "flex";
    setTimeout(() =>{
      videos[i].classList.toggle('fade')
    }, 100);
  }
  else{
    videos[i].classList.toggle('fade')
    setTimeout(() =>{
      videos[i].style.display = "none";
    }, 300);
  }
}



button_open[0].addEventListener('click',function(){toggleVideo(0)},false)
button_open[1].addEventListener('click',function(){ toggleVideo(1)},false)
button_open[2].addEventListener('click',function(){ toggleVideo(2)},false)
button_open[3].addEventListener('click',function(){ toggleVideo(3)},false)
button_open[4].addEventListener('click',function(){ toggleVideo(4)},false)
button_open[5].addEventListener('click',function(){ toggleVideo(5)},false)
button_open[6].addEventListener('click',function(){ toggleVideo(6)},false)
button_open[7].addEventListener('click',function(){ toggleVideo(7)},false)

button_close[0].addEventListener('click',function(){toggleVideo(0)},false)
button_close[1].addEventListener('click',function(){ toggleVideo(1)},false)
button_close[2].addEventListener('click',function(){ toggleVideo(2)},false)
button_close[3].addEventListener('click',function(){ toggleVideo(3)},false)
button_close[4].addEventListener('click',function(){ toggleVideo(4)},false)
button_close[5].addEventListener('click',function(){ toggleVideo(5)},false)
button_close[6].addEventListener('click',function(){ toggleVideo(6)},false)
button_close[7].addEventListener('click',function(){ toggleVideo(7)},false)
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);