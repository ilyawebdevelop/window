import * as flsFunctions from "./modules/functions.js";
import './components.js';
import './simplebar.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs]);

// Инициализация слайдера intro__slider-photo
const introSliderPhoto = document.querySelector('.intro__slider-photo');
var mySwiperIntroPhoto = new Swiper(introSliderPhoto, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  speed: 800,
  // autoplay: {
  //   delay: 7000,
  // }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  allowTouchMove: false, 
});

// Инициализация слайдера intro__slider-text
const introSliderText = document.querySelector('.intro__slider-text');
var mySwiperIntroText = new Swiper(introSliderText, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  speed: 400,
  // autoplay: {
  //   delay: 7000,
  // },  
  pagination: {
		el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
	},
	navigation: {
    nextEl: '.slider-text__next',
    prevEl: '.slider-text__prev',
  }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }, 
  thumbs: {
		swiper: mySwiperIntroPhoto,    
	}
});

// Инициализация слайдера tabs__center-slider
const calculationSliderCenter = document.querySelector('.tabs__center-slider');
var mySwiperCalculationCenter = new Swiper(calculationSliderCenter, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  speed: 800,
  // autoplay: {
  //   delay: 7000,
  // }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  allowTouchMove: true, 
  navigation: {
    nextEl: '.tabs__center-arrow-next',
    prevEl: '.tabs__center-arrow-prev',
  }, 
});

// Инициализация слайдера tabs__center-slider tab2
const calculationSliderCenter1 = document.querySelector('.tabs__center-slider-1');
var mySwiperCalculationCenter1 = new Swiper(calculationSliderCenter1, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  speed: 800,
  // autoplay: {
  //   delay: 7000,
  // }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  allowTouchMove: true, 
  navigation: {
    nextEl: '.tabs__center-arrow-next',
    prevEl: '.tabs__center-arrow-prev',
  }, 
});

// Инициализация слайдера tabs__center-slider tab3
const calculationSliderCenter2 = document.querySelector('.tabs__center-slider-2');
var mySwiperCalculationCenter2 = new Swiper(calculationSliderCenter2, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  speed: 800,
  // autoplay: {
  //   delay: 7000,
  // }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  allowTouchMove: true, 
  navigation: {
    nextEl: '.tabs__center-arrow-next',
    prevEl: '.tabs__center-arrow-prev',
  }, 
});

// Инициализация слайдера tabs__center-slider tab4
const calculationSliderCenter3 = document.querySelector('.tabs__center-slider-3');
var mySwiperCalculationCenter3 = new Swiper(calculationSliderCenter3, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  speed: 800,
  // autoplay: {
  //   delay: 7000,
  // }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  allowTouchMove: true, 
  navigation: {
    nextEl: '.tabs__center-arrow-next',
    prevEl: '.tabs__center-arrow-prev',
  }, 
});

// Инициализация слайдера accesories
const accesoriesSlider = document.querySelector('.accesories-slider');
var mySwiperAccesories = new Swiper(accesoriesSlider, { 	
  slidesPerView: 4,	
  spaceBetween: 20, 	 
  navigation: {
    nextEl: '.accesories-next',
    prevEl: '.accesories-prev',
  }, 
  breakpoints: {  
    0: {
      slidesPerView: 1,	
    },  
    576: {
      slidesPerView: 2,	
    }, 
    768: {
      slidesPerView: 2,	
    }, 
    991: {
      slidesPerView: 3,	
    }, 
    1400: {
      slidesPerView: 4,	
    }, 
  },
});

// Инициализация слайдера reviews__slider
const reviewsSlider = document.querySelector('.reviews__slider');
var mySwiperReviews = new Swiper(reviewsSlider, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  }, 
  pagination: {
		el: '.reviews-pagination',
    clickable: true,   
	},
});

document.querySelectorAll('.tabs__type').forEach(el => {
  new SimpleBar(el)
});

// Инициализация слайдера profile
const profileSlider = document.querySelector('.profile__slider');
var mySwiperProfile = new Swiper(profileSlider, { 	
  slidesPerView: 4,	
  spaceBetween: 20, 	 
  navigation: {
    nextEl: '.profile__next',
    prevEl: '.profile__prev',
  }, 
  breakpoints: {  
    0: {
      slidesPerView: 1,	
    },  
    576: {
      slidesPerView: 2,	
    }, 
    768: {
      slidesPerView: 2,	
    }, 
    991: {
      slidesPerView: 3,	
    }, 
    1400: {
      slidesPerView: 4,	
    }, 
  },
});

// Инициализация слайдера calculation-page__slider
const calculatePageSlider = document.querySelector('.calculation-page__slider');
var mySwiperCalculatePage = new Swiper(calculatePageSlider, { 	
  slidesPerView: 6,	
  direction: 'vertical',
  spaceBetween: 15, 	 
  speed: 800,
  // autoplay: {
  //   delay: 7000,
  // },   
  allowTouchMove: false, 
});


// Инициализация слайдера calculation-lg-slider
const CalculateSliderLg = document.querySelector('.calculation-lg-slider');
var mySwiperCalculateLg = new Swiper(CalculateSliderLg, { 	
  slidesPerView: 1,	
  spaceBetween: 10, 	 
  speed: 400,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }, 
  allowTouchMove: false, 
  thumbs: {
		swiper: mySwiperCalculatePage,    
	}
});

const list = document.querySelectorAll('.tabs__nav-btn')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('tabs__nav-btn--active'); });
        item.classList.add('tabs__nav-btn--active')
    })
})

const chexboxes = document.querySelectorAll('.chexbox-1')
chexboxes.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
          chexboxes.forEach(el=>{ el.checked = false });
        item.checked = true;
    })
})

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.header__nav-item');


const toggleMenu = function () {
	menu.classList.toggle('open');
}
const toggleBurger = function () {
	btnMenu.classList.toggle('active');
}
const toggleMenuLine = function () {
	menuLine1.classList.toggle('active');
	menuLine2.classList.toggle('active');
	menuLine3.classList.toggle('active');
}
const bodyOverflow = function () {
	bodyEl.classList.toggle('hidden');
}
btnMenu.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
	toggleBurger();
	bodyOverflow();
	toggleMenuLine();
});
navItemAll.forEach((el) => {
	el.addEventListener("click", function () {
		if (menu.classList.contains("open")) {
			toggleMenu();
			toggleBurger();
			bodyOverflow();
		}
	});
})

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');










