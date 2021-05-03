gsap.registerPlugin(ScrollTrigger);


function horizontalScroll(){


let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".horizontal").offsetWidth
  }
});

}



function init(){

  horizontalScroll();


}

window.addEventListener('load', function(){
  init();
});
