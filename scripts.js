const btn_mobile = document.getElementById("btn_mobile");

function toggle_Menu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}
btn_mobile.addEventListener('click',toggle_Menu);