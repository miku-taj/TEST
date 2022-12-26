//Main nav
let theEnd = 0;
const mainNav = document.querySelector("#main-nav");

if (window.innerWidth < 900) {
  mainNav.innerHTML = `<div class="nav py-3 z-50 relative flex w-11/12 justify-end sm:justify-center mx-auto items-center">
          <button class="menu-icon cursor-pointer absolute left-0 w-10 h-8">
            <div class="relative bg-black h-1.5 w-10 rounded-md"></div>
          </button>
          <a href="./index.html"><img class="sm:w-auto w-32" src="./images/logo.svg" alt="LOGO" /></a>
          <button class="sign-btn uppercase hidden sm:block absolute right-0 border-2 py-1 px-2 sm:py-2 sm:px-3 text-sm border-black font-normal hover:bg-black hover:text-white">
            <a href="#">записаться</a>
          </button>
        </div>
        
        <ul class="menu-links absolute pt-4 z-10 bg-inherit w-full">
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="./about.html">О нас</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="#">Прайс</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="#">Отзывы</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="#">Студии</a></li>
          <li class="w-full"><a class="block w-11/12 mx-auto leading-10 font-light" href="./blog.html">Блог</a></li>
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
        <a class="font-light underLine" href="./blog.html">Блог</a>
        <a class="font-light underLine" href="tel:+7(812)6605088"
          >+7 (812) 660-50-88</a
        >
        <button
          class="sign-btn uppercase border-2 py-2 px-3 border-black font-normal hover:bg-black hover:text-white"
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

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["Заголовок"];
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      if (i === text.length - 1) {
        document.querySelector(".typed").innerHTML = text.substring(0, i + 1);
      } else {
        document.querySelector(".typed").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      }
      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 200);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

//sign up

const signUp = document.querySelector(".sign-window");
const signBtns = document.querySelectorAll(".sign-btn");
const closeSign = document.querySelector("#close-sign");
const signedUp = document.querySelector("#signed");
const inputs = document.querySelectorAll(".sign-input");
const warning = document.querySelector("#warning");
const successfulReg = document.querySelector("#success");
signBtns.forEach((el) => {
  el.addEventListener("click", () => {
    signUp.classList.add("flex");
    signUp.classList.remove("hidden");
  });
});

closeSign.addEventListener("click", () => {
  signUp.classList.add("hidden");
  signUp.classList.remove("flex");
});
let ifInputIsEmpty = false;
signedUp.addEventListener("click", () => {
  ifInputIsEmpty = false;
  inputs.forEach((el) => {
    if (el.value === "") ifInputIsEmpty = true;
  });
  if (ifInputIsEmpty) {
    warning.classList.remove("hidden");
  } else {
    warning.classList.add("hidden");
    warning.classList.remove("flex");
    successfulReg.classList.add("flex");
    successfulReg.classList.remove("hidden");
  }
});
