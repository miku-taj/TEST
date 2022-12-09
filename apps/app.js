//Main nav
let theEnd = 0;
const mainNav = document.querySelector("#main-nav");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > theEnd) {
    mainNav.style.transform = "translateY(-110%)";
  } else {
    mainNav.style.transform = "translateY(0px)";
  }
  theEnd = scrollTop;
});

//changing banner

const saleBanner = document.querySelector("#sale");
const cheaperBanner = document.querySelector("#cheaper");
const swicthLeft = document.querySelector(".switch-left");
const swicthRight = document.querySelector(".switch-right");

function changeBanner() {
  saleBanner.classList.toggle("flex");
  cheaperBanner.classList.toggle("flex");
  cheaperBanner.classList.toggle("hidden");
  saleBanner.classList.toggle("hidden");
  swicthLeft.classList.toggle("active");
  swicthRight.classList.toggle("active");
}

window.onload = function () {
  setInterval(changeBanner, 5000);
};

//Services nav
const manicureBtn = document.querySelector("#manicureBtn");
const growingBtn = document.querySelector("#growingBtn");
const pedicureBtn = document.querySelector("#pedicureBtn");
const browsBtn = document.querySelector("#browsBtn");

const manicure = document.querySelector("#manicure");
const growing = document.querySelector("#growing");
const pedicure = document.querySelector("#pedicure");
const brows = document.querySelector("#brows");

manicureBtn.addEventListener("click", () => {
  manicure.classList.remove("hidden");
  manicure.classList.add("flex");
  growing.classList.remove("flex");
  growing.classList.add("hidden");
  pedicure.classList.remove("flex");
  pedicure.classList.add("hidden");
  brows.classList.remove("flex");
  brows.classList.add("hidden");
});

growingBtn.addEventListener("click", () => {
  growing.classList.remove("hidden");
  growing.classList.add("flex");
  manicure.classList.remove("flex");
  manicure.classList.add("hidden");
  pedicure.classList.remove("flex");
  pedicure.classList.add("hidden");
  brows.classList.remove("flex");
  brows.classList.add("hidden");
});

pedicureBtn.addEventListener("click", () => {
  manicure.classList.remove("flex");
  manicure.classList.add("hidden");
  growing.classList.remove("flex");
  growing.classList.add("hidden");
  pedicure.classList.remove("hidden");
  pedicure.classList.add("flex");
  brows.classList.remove("flex");
  brows.classList.add("hidden");
});

browsBtn.addEventListener("click", () => {
  pedicure.classList.remove("flex");
  pedicure.classList.add("hidden");
  manicure.classList.remove("flex");
  manicure.classList.add("hidden");
  growing.classList.remove("flex");
  growing.classList.add("hidden");
  brows.classList.remove("hidden");
  brows.classList.add("flex");
});

//portfolio
const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper button");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
