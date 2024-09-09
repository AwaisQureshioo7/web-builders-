  let time = gsap.timeline()
  time.from(".icons i" ,{
    opacity: 0,
    y: -20,
    stagger: 0.1,
    // duration: 1.3,
    ease: "elastic.out",
    delay: 0.5,
    transformOrigin: "center"
  })
  time.from(".whts a i" ,{
    opacity: 0,
    y: -20,
    // duration: 0.4,
    ease: "elastic.out",
    transformOrigin: "center"
  })
  time.from("  span" ,{
    opacity: 0,
    stagger:0.4,
    y: -20,
    // duration: 0.4,
    ease: "elastic.out",
    transformOrigin: "center"
  })
  time.from(" .navbar ul li" ,{
    // opacity: 0,
    stagger:0.070,
    y: -20,
    // duration: 0.4,
    ease: "elastic.out",
    transformOrigin: "center"
  })
  gsap.from(".banner-para h1",{
    opacity: 0,
    scale:2,
    duration: 1,
    ease: "elastic.out",
    delay:1.2,
  })
   gsap.from(".about-details ",{
    opacity: 0,
    y: -20,
    stagger:2,
    // duration: 1.3,
    ease: "elastic.out",
    delay:1.5,
    transformOrigin: "center",
    scrollTrigger:".about-details",
   })

    






    // future sliderr section closed here
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  //  popup slider 
      var swp = new Swiper(".swp", {
    pagination: {
      el: ".swiper-pagination",
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// jawascript start here
     $ (document).ready(function(){
     $ ("#menu-bars").click(function(){
      $ (".trigger-menu").slideDown(800);
     })
     $ (".fa-times").click (function(){
      $ (".trigger-menu").slideUp(500)
     })
     });

           document.getElementById("menu-bars").addEventListener("click" ,function(){
      var menu = document.getElementById("cl-bars");
      var menu2 = document.getElementById("menu-bars");
         menu.style.display ="block";
         menu2.style.opacity ="0";
      })
      document.getElementById("cl-bars").addEventListener("click" ,function(){
        var menu = document.getElementById("cl-bars");
        var menu2 = document.getElementById("menu-bars");
         menu.style.display ="none";
         menu2.style.opacity ="1";
      })
     
    
    document.addEventListener("scroll" , function(){
      let back_button = document.getElementById("back-button");
      if( window.scrollY > 300){
          back_button.style.opacity ="1";
          back_button.style.transition ="0.5s";
      }
      else{
        back_button.style.opacity ="0";
        back_button.style.transition ="0.5s";
      }
    });
  // gallery section popup 
  document.getElementById("img-click").addEventListener("click" ,function(){
    var popup = document.getElementById("parent-box");
    popup.style.display ="block";
  });

// loader script codes

const myTimeout = setTimeout(myloder ,3000);

function myloder() {
  document.getElementById("parent-loder").style.display ="none";
};

// load more images
document.addEventListener("DOMContentLoaded", function() {
  var collectionItems = document.getElementById("load");
  var seeMoreButton = document.getElementById("seeMoreButton");

  seeMoreButton.addEventListener("click", function() {
    collectionItems.style.display ="block";
  })
})

