//responsiveness
const mainNav = document.querySelector("#main-nav");

//let width = screen.width;
//if (width >= 900) {
//  mainNav.innerHTML = `
//  <div class="flex justify-between mx-auto items-center w-11/12">
//        <a href="#"><img src="./images/logo.svg" alt="LOGO" /></a>
//        <a class="font-light underLine" href="#">О нас</a>
//        <a class="font-light underLine" href="#">Прайс</a>
//        <a class="font-light underLine" href="#">Отзывы</a>
//        <a class="font-light underLine" href="#">Студии</a>
//        <a class="font-light underLine" href="#">Блог</a>
//        <a class="font-light underLine" href="tel:+7(812)6605088">+7 (812) 660-50-88</a>
//        <button class="uppercase border-2 py-2 px-3 border-black font-normal hover:bg-black hover:text-white">
//          <a href="#">записаться</a>
//        </button>
//      </div>`;
//}

//Main nav
let theEnd = 0;

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
const saleDiv = document.querySelector(".sale");
const saleText = document.querySelectorAll(".sale-text");
const cheaperBanner = document.querySelector("#cheaper");
const cheaperDiv = document.querySelector(".cheaper");
const cheaperText = document.querySelectorAll(".cheaper-text");
const swicthLeft = document.querySelector(".switch-left");
const swicthRight = document.querySelector(".switch-right");

function changeBanner() {
  saleText.forEach((el) => el.classList.toggle("hidden"));
  cheaperText.forEach((el) => el.classList.toggle("hidden"));
  saleBanner.classList.toggle("w-0");
  cheaperBanner.classList.toggle("w-full");
  cheaperBanner.classList.toggle("w-0");
  saleBanner.classList.toggle("w-full");
  cheaperDiv.classList.toggle("w-1/3");
  cheaperDiv.classList.toggle("w-0");
  saleDiv.classList.toggle("w-0");
  saleDiv.classList.toggle("w-1/3");
  swicthLeft.classList.toggle("active");
  swicthRight.classList.toggle("active");
}

window.onload = function () {
  setInterval(changeBanner, 5000);
};

swicthLeft.addEventListener("click", () => {
  if (swicthLeft.classList.contains("active")) {
    return;
  } else {
    changeBanner();
  }
});

swicthRight.addEventListener("click", () => {
  if (swicthRight.classList.contains("active")) {
    return;
  } else {
    changeBanner();
  }
});

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
  firstImg = carousel.querySelectorAll("div")[0],
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
    let firstImgWidth = firstImg.clientWidth;
    console.log(firstImgWidth);
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth;
  let valDifference = firstImgWidth - positionDiff;

  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
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

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//comments

const carouselCom = document.querySelector(".comment-carousel"),
  firstCom = carouselCom.querySelectorAll("div")[0],
  arrowIconsCom = document.querySelectorAll(".comment-wrapper button");

let isDragStartCom = false,
  isDraggingCom = false,
  prevPageXCom,
  prevScrollLeftCom,
  positionDiffCom;

const showHideIconsCom = () => {
  let scrollWidth = carouselCom.scrollWidth - carouselCom.clientWidth;
  arrowIconsCom[0].style.display =
    carouselCom.scrollLeft == 0 ? "none" : "block";
  arrowIconsCom[1].style.display =
    carouselCom.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIconsCom.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstComWidth = firstCom.clientWidth;
    carouselCom.scrollLeft +=
      icon.id == "left" ? -firstComWidth : firstComWidth;
    setTimeout(() => showHideIconsCom(), 60);
    showHideIconsCom();
  });
});

const autoSlideCom = () => {
  if (
    carouselCom.scrollLeft -
      (carouselCom.scrollWidth - carouselCom.clientWidth) >
      -1 ||
    carouselCom.scrollLeft <= 0
  )
    return;

  positionDiffCom = Math.abs(positionDiffCom);
  let firstComWidth = firstCom.clientWidth;
  let valDifference = firstComWidth - positionDiffCom;

  carouselCom.scrollLeft -=
    positionDiffCom > firstComWidth / 3 ? valDifference : -positionDiffCom;
};

const dragStartCom = (e) => {
  isDragStartCom = true;
  prevPageXCom = e.pageX || e.touches[0].pageX;
  prevScrollLeftCom = carouselCom.scrollLeft;
};

const draggingCom = (e) => {
  if (!isDragStartCom) return;
  e.preventDefault();
  isDraggingCom = true;
  carouselCom.classList.add("dragging");
  positionDiffCom = (e.pageX || e.touches[0].pageX) - prevPageXCom;
  carouselCom.scrollLeft = prevScrollLeftCom - positionDiffCom;
  showHideIconsCom();
};

const dragStopCom = () => {
  isDragStartCom = false;
  carouselCom.classList.remove("dragging");

  if (!isDraggingCom) return;
  isDraggingCom = false;
  autoSlide();
};

carouselCom.addEventListener("mousedown", dragStartCom);

document.addEventListener("mousemove", draggingCom);
carouselCom.addEventListener("touchmove", draggingCom);

document.addEventListener("mouseup", dragStopCom);
carouselCom.addEventListener("touchend", dragStopCom);

//places block
const centerBtn = document.querySelector("#centerBtn");
const petrogradBtn = document.querySelector("#petrogradBtn");
const center = document.querySelector("#center");
const petrograd = document.querySelector("#petrograd");

centerBtn.addEventListener("click", () => {
  if (center.classList.contains("flex")) {
    return;
  } else {
    center.classList.toggle("flex");
    center.classList.toggle("hidden");
    petrograd.classList.toggle("flex");
    petrograd.classList.toggle("hidden");
    centerBtn.classList.add("underLine-active");
    petrogradBtn.classList.remove("underLine-active");
  }
});
petrogradBtn.addEventListener("click", () => {
  if (petrograd.classList.contains("flex")) {
    return;
  } else {
    center.classList.toggle("flex");
    center.classList.toggle("hidden");
    petrograd.classList.toggle("flex");
    petrograd.classList.toggle("hidden");
    centerBtn.classList.remove("underLine-active");
    petrogradBtn.classList.add("underLine-active");
  }
});
