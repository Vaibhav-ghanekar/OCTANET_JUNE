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
  let menu = document.getElementById("dropbox");
  let dropdown= document.getElementById("sidebar");
  let cross = document.getElementById("close");
  function showBox(){
    dropdown.style.left="0px";
    dropdown.style.zIndex="2";
  }
  function hideBox(){
    dropdown.style.left="-415px";
    dropdown.style.zIndex="0";
  }
  function prompt(){
    alert("Currently working on it!!");
  }