!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"openModalFeedback",(function(){return a}));var r=document.querySelectorAll(".projects__button"),o=document.querySelector(".backdrop"),c=document.querySelectorAll(".contacts-socnav__btn");function s(e){var t=o.querySelector(".modal-projects"),n=t.querySelector(".open-modal");n&&n.classList.remove("open-modal");var r=o.querySelector('[data-number="'.concat(e.currentTarget.dataset.number,'"]')),c=r.querySelector(".modal__close");r.classList.add("open-modal"),t.classList.add("open-modal"),c.addEventListener("click",l),$(".sliderModal").slick("setPosition"),i()}function a(){var e=o.querySelector(".modal-feedback"),t=e.querySelector(".modal__close"),n=document.querySelector(".modal-feedback__button");e.classList.add("open-modal"),t.addEventListener("click",l),n.addEventListener("click",l),i()}function i(){o.classList.remove("is-hidden"),document.documentElement.classList.add("scroll-hidden"),document.addEventListener("keydown",u),o.addEventListener("click",d)}function l(){o.querySelector(".open-modal.modal-window").classList.remove("open-modal"),o.classList.add("is-hidden"),document.documentElement.classList.remove("scroll-hidden"),document.removeEventListener("keydown",u),o.removeEventListener("click",d)}function d(e){e.target===e.currentTarget&&l()}function u(e){"Escape"===e.code&&l()}function m(){var e=o.querySelector(".modal-footer"),t=e.querySelector(".modal__close"),n=document.querySelector(".modal-footer__button");e.classList.add("open-modal"),t.addEventListener("click",l),n.addEventListener("click",l),i()}Array.from(r).forEach((function(e){return e.addEventListener("click",s)})),Array.from(c).forEach((function(e){return e.addEventListener("click",m)}))},function(e,t,n){n(2),n(3),n(4),n(0),n(5),n(6),e.exports=n(7)},function(e,t){var n=document.querySelector(".header"),r=document.querySelector("html"),o=document.querySelector(".burger-menu"),c=document.querySelector(".header__mobile");function s(){o.classList.toggle("burger-menu--opened"),c.classList.toggle("header__menu-show"),o.classList.contains("burger-menu--opened")?(n.style.backgroundColor="rgba(254, 254, 254, 1)",r.style.overflow="hidden"):(n.style.backgroundColor="rgba(254, 254, 254, 0.25)",r.style.overflow="visible")}function a(){if(!(window.innerWidth>=768)){var e=window.pageYOffset||document.documentElement.scrollTop;if(e>75&&o.classList.contains("burger-menu--opened"))n.style.backgroundColor="rgba(254, 254, 254, 1)";else if(e>75)return void(n.style.backgroundColor="rgba(254, 254, 254, 0.25)");n.style.backgroundColor="rgba(254, 254, 254, 1)"}}document.querySelectorAll(".header__mobile-item").forEach((function(e){return e.addEventListener("click",s)})),o.addEventListener("click",s),window.addEventListener("scroll",a),window.addEventListener("resize",a)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=document.querySelector(".form"),c=document.getElementById("name"),s=document.getElementById("phone");function a(e){var t=e.target;t.hasAttribute("data-reg")&&i(t)}function i(e){var t,n=!0,r=e.value.trim(),o=e.getAttribute("data-reg");return new RegExp(o).test(r)?((t=e).classList.add("success__input"),t.classList.remove("error__input")):(!function(e){e.classList.add("error__input"),e.classList.remove("success__input")}(e),n=!1),n}o.addEventListener("input",a),o.addEventListener("submit",(function(e){e.preventDefault();var t=i(c),n=i(s);t&&n&&(Object(r.openModalFeedback)(),e.currentTarget.reset())})),s.addEventListener("blur",a)},function(e,t){!function(e){function t(e){var t=0,n="+44 ____ ______".replace(/\D/g,""),r=this.value.replace(/\D/g,"");n.length>=r.length&&(r=n),this.value="+44 ____ ______".replace(/./g,(function(e){return/[_\d]/.test(e)&&t<r.length?r.charAt(t++):t>=r.length?"":e})),"blur"===e.type?2==this.value.length&&(this.value=""):function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var n=t.createTextRange();n.collapse=!0,n.moveEnd("character",e),n.moveStart("character",e),n.select()}}(this.value.length,this)}var n=document.querySelector(e);n.addEventListener("input",t),n.addEventListener("blur",t),n.addEventListener("focus",t)}('[name="phone"]')},function(e,t){var n,r,o;n=document.querySelector(".team__list-wrapper"),r=n.querySelector(".team__btn"),o=n.querySelectorAll(".team__list-item"),n.addEventListener("click",(function(e){e.target.closest(".team__btn")&&o.forEach((function(e){e.classList.contains("team__is-hidden")&&(e.classList.remove("team__is-hidden"),window.scrollBy({top:300,behavior:"smooth"}),r.classList.add("team__is-hidden"))}))}))},function(e,t){$(".slider").slick({arrows:!1,dots:!0,speed:300,cssEase:"ease-in-out"}),$(".sliderModal").slick({speed:300,cssEase:"ease-in-out",variableWidth:!0})},function(e,t){$(".swiper").slick({infinite:!0,speed:300,slidesToShow:2,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:1}}]})}]);