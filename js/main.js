/* =====================
ハンバーガーメニュー
===================== */

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');

    const isOpen = burger.classList.contains('is-open');
    burger.setAttribute('aria-expanded', isOpen);
  });
}


/* =====================
トップに戻るボタン
===================== */

const toTop = document.querySelector('.to-top');

if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      toTop.classList.add('is-visible');
    } else {
      toTop.classList.remove('is-visible');
    }
  });
}

//「存在チェック」すると安全


/* =====================
Swiperの初期化
===================== */

const swiper = new Swiper('.mv__slider', {
  loop: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  speed: 2000,
});

/* =====================
WORKS 施工事例　ループ再生スライダー
===================== */

const worksSwiper = new Swiper('.works-slider', {

  loop: true,

  spaceBetween:20,

  speed:7000,

  autoplay:{
    delay:0,
    disableOnInteraction:false
  },

  breakpoints:{

    0:{
      slidesPerView:1
    },

    768:{
      slidesPerView:4
    }

  }

});
