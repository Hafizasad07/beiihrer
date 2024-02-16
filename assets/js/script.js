//loader script
function preload() {
  const TIMELINE_PRELOAD = gsap.timeline();
  
  TIMELINE_PRELOAD
  .fromTo(".c-preload__logo-image", {
    opacity: 0,
    y: '10%'
  }, {
    opacity: 1,
    y: '0',
    duration: 1.5,
    ease: 'power2.out'
  })
  .to(".c-preload__logo-image", {
    opacity: 0,
    delay: 0.2,
    ease: 'power2.out'
  })
  .to(".c-preload__vertical-line", {
    height: "0",
    duration: 1,
    ease: 'power2.out'
  });
  setTimeout(() => {
    $(".wrapper").addClass('show');
  }, 2000);
}

window.addEventListener('load', preload);

// header script

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

  console.log(213213);
  $(window).scroll(function () {
  console.log(213213);
  if ($(window).scrollTop() > 100) {
  console.log(123);
  $(".header-section").addClass("scroll-header");
  }else{
  $(".header-section").removeClass("scroll-header");
  }
})