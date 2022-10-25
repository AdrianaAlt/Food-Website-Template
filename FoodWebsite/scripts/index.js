/* Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//change nav style on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});