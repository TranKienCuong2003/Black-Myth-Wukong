"use strict";
const dynamicMenu = document.getElementById("dynamic-menu");
const sidebarMenu = document.getElementById("sidebar-menu");
const fixedBuyNowButton = document.getElementById("fixed-buy-now-button");
const fixedLanguagesChangeButton = document.getElementById(
  "fixed-languages-change-section"
);

const pageLinks = document.querySelectorAll(".page-link");

const handleActiveNavigation = () => {
  let fromTop = window.scrollY;

  pageLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 300 &&
      section.offsetTop + section.offsetHeight > fromTop + 300
    ) {
      // Highlight current link
      link.firstElementChild.classList.add("active");

      // Toggle fixed dynamic menu and fixed sidebar
      if (link.hash === "#hero-section") {
        dynamicMenu.classList.remove("hidden");
        sidebarMenu.classList.add("hidden");
        fixedBuyNowButton.classList.add("hidden");
        fixedLanguagesChangeButton.classList.add("hidden");
      }
    } else {
      // Remove highlight current link
      link.firstElementChild.classList.remove("active");

      // Toggle fixed dynamic menu and fixed sidebar
      if (link.hash === "#hero-section") {
        dynamicMenu.classList.add("hidden");
        sidebarMenu.classList.remove("hidden");
        fixedBuyNowButton.classList.remove("hidden");
        fixedLanguagesChangeButton.classList.remove("hidden");
      }
    }
  });
};

// Listen once when page is fully loaded
window.addEventListener("load", handleActiveNavigation);

// Listen when scroll
window.addEventListener("scroll", handleActiveNavigation);

// News swiper slides
const swiper = new Swiper(".news-swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="news-swiper-pagination-item ${className}">&nbsp;</div>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// News video - full screen modal
const newsVideoPlayIcon = document.getElementById("news-video-play-icon");
const fullScreenVideoModal = document.getElementById(
  "play-video-full-screen-modal"
);
const closeFullScreenVideoModal = document.getElementById(
  "play-video-full-screen-modal-close"
);
const newsVideo = document.getElementById("news-video-full-screen");

newsVideoPlayIcon.addEventListener("click", () => {
  fullScreenVideoModal.style.display = "block";
  newsVideo.play();
});

closeFullScreenVideoModal.addEventListener("click", () => {
  fullScreenVideoModal.style.display = "none";
  newsVideo.pause();
});

// Media swiper section
const thumbSwiper = new Swiper(".thumb-swiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const mediaSwiper = new Swiper(".media-swiper", {
  loop: true,
  spaceBetween: 10,
  // If u want autoplay slides:
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  navigation: {
    nextEl: ".media-swiper-button-next",
    prevEl: ".media-swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});
