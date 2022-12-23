//Main nav
let theEnd = 0;
const mainNav = document.querySelector("#main-nav");

if (window.innerWidth < 900) {
  mainNav.innerHTML = `<div class="nav py-3 z-50 relative flex w-11/12 justify-end sm:justify-center mx-auto items-center">
          <button class="menu-icon cursor-pointer absolute left-0 w-10 h-8">
            <div class="relative bg-black h-1.5 w-10 rounded-md"></div>
          </button>
          <a href="#"><img class="sm:w-auto w-32" src="./images/logo.svg" alt="LOGO" /></a>
          <button class="uppercase hidden sm:block absolute right-0 border-2 py-1 px-2 sm:py-2 sm:px-3 text-sm border-black font-normal hover:bg-black hover:text-white">
            <a href="#">записаться</a>
          </button>
        </div>
        
        <ul class="menu-links absolute pt-4 z-10 bg-inherit w-full">
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="./about.html">О нас</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="#">Прайс</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="#">Отзывы</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="#">Студии</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="#">Блог</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="tel:+7(812)6605088">+7 (812) 660-50-88</a></li>          
        </ul>`;
  const menuIcon = document.querySelector(".menu-icon");
  const menuLinks = document.querySelector(".menu-links");
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("activated");
    if (menuIcon.classList.contains("activated")) {
      menuLinks.style.top = "50px";
    } else {
      menuLinks.style.top = "-1000px";
    }
    setTimeout(() => {
      menuLinks.classList.toggle("shadow-md");
    }, "500");
  });
} else {
  mainNav.innerHTML = `        <div class="flex py-3 justify-between mx-auto items-center w-11/12">
        <a href="./index.html"><img src="./images/logo.svg" alt="LOGO" /></a>
        <a class="font-light underLine" href="./about.html">О нас</a>
        <a class="font-light underLine" href="#">Прайс</a>
        <a class="font-light underLine" href="#">Отзывы</a>
        <a class="font-light underLine" href="#">Студии</a>
        <a class="font-light underLine" href="#">Блог</a>
        <a class="font-light underLine" href="tel:+7(812)6605088"
          >+7 (812) 660-50-88</a
        >
        <button
          class="uppercase border-2 py-2 px-3 border-black font-normal hover:bg-black hover:text-white"
        >
          <a href="#">записаться</a>
        </button>
      </div>`;
}

window.addEventListener("scroll", () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > theEnd) {
    mainNav.style.transform = "translateY(-100%)";
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
