import VSwiper from "./modules/VSwiper";
import VacancyBtn from "./modules/VacancyBtn";
import Video from "./modules/Video";
import Anchor from "./modules/Anchor";
import Nav from "./modules/Nav";
import Tab from "./modules/Tab";

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
*/
function initClickTypeSlider() {
  swiper.init(".tmpl-hh__click-type-slider__inner", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    //   effect: "fade",
    pagination: {
      el: ".tmpl-hh__click-type-slider__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return current + " / " + total;
      },
    },
    navigation: {
      prevEl: ".tmpl-hh__click-type-slider-arrow-prev",
      nextEl: ".tmpl-hh__click-type-slider-arrow-next",
      // disabledClass: "tmpl-hh__slider-arrow-disabled",
    },
  });
}
function initClickLifeSlider() {
  swiper.init(".tmpl-hh__click-life-slider__inner", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    //   effect: "fade",
    pagination: {
      el: ".tmpl-hh__click-life-slider__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return current + " / " + total;
      },
    },
    navigation: {
      prevEl: ".tmpl-hh__click-life-slider-arrow-prev",
      nextEl: ".tmpl-hh__click-life-slider-arrow-next",
      // disabledClass: "tmpl-hh__slider-arrow-disabled",
    },
  });
}
function initGallerySlider() {
  swiper.init(".tmpl-hh__gallery-slider-wrapper", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    effect: "fade",
    pagination: {
      el: ".tmpl-hh__gallery-slider__pagination",
      clickable: true,
    },
    bulletActiveClass: ".tmpl-hh__slider-pagination-active",
    navigation: {
      prevEl: ".tmpl-hh__gallery-slider-arrow-prev",
      nextEl: ".tmpl-hh__gallery-slider-arrow-next",
    },
  });
}

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const swiper = new VSwiper();
new Video();
new Tab();
new VacancyBtn();
new Anchor();
new Nav();

initClickTypeSlider();
initClickLifeSlider();
initGallerySlider();
