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
  
  function disableScroll() {
    // Get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Save the current scroll position
    document.body.dataset.scrollPosition = scrollPosition;
    // Add CSS to disable scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
  }
  
  // Enable scroll
  function enableScroll() {
    // Get the saved scroll position
    var scrollPosition = parseInt(document.body.dataset.scrollPosition || '0', 10);
    // Remove the CSS to enable scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    // Restore the saved scroll position
    window.scrollTo(0, scrollPosition);
  }
  let menu = document.getElementById("dropbox");
  let dropdown= document.getElementById("sidebar");
  let cross = document.getElementById("close");
  
  function showBox(){
    dropdown.style.left="0px";
    dropdown.style.display="block";
    /*dropdown.style.flexDirection="column";
    dropdown.style.justifyContent="center";
    dropdown.style.alignItems="center";
    */
    dropdown.style.zIndex="2";
  }
  function hideBox(){
    dropdown.style.left="-415px";
    dropdown.style.zIndex="0";
    dropdown.style.display="none";
  }
  function prompt(){
    alert("Currently working on it!!");
  }

