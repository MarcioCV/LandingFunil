const btn_mobile = document.getElementById("btn_mobile");

function toggle_Menu() {
    const nav = document.getElementById("div_mobile_nav");
    nav.classList.toggle('active');
}
btn_mobile.addEventListener('click',toggle_Menu);