let image= document.getElementById("hd-img");
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    let nav_img= document.querySelector('img');
    let img_t= document.querySelector('span');
    let up_arrow= document.querySelector('i');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
    nav_img.classList.toggle('sc-nav', window.scrollY > 0);
    img_t.classList.toggle('sc-title', window.scrollY > 0);
    up_arrow.classList.toggle('sc-arrow',window.scrollY > 0);
  });
let tag= document.getElementById("pr-tag");
let gg= document.getElementsByClassName("prr");
function showOverlay(){
    //tag.style.display="none";
    gg.style.display="none";
}
function hideOverlay(){
    //tag.style.display="block";
    gg.style.display="block";
}