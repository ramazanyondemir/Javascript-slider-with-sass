const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slide = document.querySelector(".slide-container");

function hasHorizontalScroll(slide) {
   return slide.scrollWidth > slide.offsetWidth;
}
function isScrollStart(slide) {
   return slide.scrollLeft === 0;
}
function isScrollEnd(slide) {
   return slide.scrollLeft + slide.offsetWidth === slide.scrollWidth;
}

nextBtn.addEventListener("click", () => {
   slide.scrollLeft += slide.offsetWidth + 10;
});

prevBtn.addEventListener("click", () => {
   slide.scrollLeft -= slide.offsetWidth + 10;
});

function scrollControl() {
   // yatay scroll var ise
   if (hasHorizontalScroll(slide)) {
      // scroll başlangıçta ise
      if (isScrollStart(slide)) {
         prevBtn.classList.add("hidden");
      } else {
         prevBtn.classList.remove("hidden");
      }

      // scroll sonda ise
      if (isScrollEnd(slide)) {
         nextBtn.classList.add("hidden");
      } else {
         nextBtn.classList.remove("hidden");
      }
   }
}

slide.addEventListener("scroll", scrollControl);
scrollControl();
