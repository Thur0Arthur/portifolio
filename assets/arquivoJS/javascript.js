//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

//Menu funções de scroll

function home() {
  window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'
  })
}
function about() {
  window.scrollTo({
    top:1600,
    left:0,
    behavior: 'smooth'
  })
}
function projects() {
  window.scrollTo({
    top:3200,
    left:0,
    behavior: 'smooth'
  })
}
function skills() {
  window.scrollTo({
    top:4807,
    left:0,
    behavior: 'smooth'
  })
}

//Area de sliders

let totalSliders = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSliders})`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider-width').clientHeight}.px`;

function goPrev() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSliders - 1;
  }
  updateMargin();
}
function goNext() {
  currentSlide++;
  if(currentSlide > (totalSliders-1)) {
    currentSlide = 0;
  }
  updateMargin();
}
function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider-item').clientWidth
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;

}

// AREA DAS FUNÇÕES DAS IMGS

let areaTextImg = document.querySelector('.sectionFour-text-click');
let htmlIMG = document.querySelector('.htmlText');
let cssImg = document.querySelector('.cssText');
let jsImg = document.querySelector('.JSText');
let tsImg = document.querySelector('.TSText');
let gitImg = document.querySelector('.gitText');
let bddImg = document.querySelector('.bddText');

function htmlText() {
  areaTextImg.style.display = "none";
  htmlIMG.style.display = "block";
  cssImg.style.display = 'none'
  jsImg.style.display = "none";
  tsImg.style.display = "none";
  gitImg.style.display = "none";
  bddImg.style.display = "none";
}
function cssText() {
  cssImg.style.display = "block";
  htmlIMG.style.display = "none";
  areaTextImg.style.display = "none";
  jsImg.style.display = "none";
  tsImg.style.display = "none";
  gitImg.style.display = "none";
  bddImg.style.display = "none";
}
function JSText() {
  cssImg.style.display = "none";
  htmlIMG.style.display = "none";
  areaTextImg.style.display = "none";
  jsImg.style.display = "block";
  tsImg.style.display = "none";
  gitImg.style.display = "none";
  bddImg.style.display = "none";
}
function TSText() {
  cssImg.style.display = "none";
  htmlIMG.style.display = "none";
  areaTextImg.style.display = "none";
  jsImg.style.display = "none";
  tsImg.style.display = "block";
  gitImg.style.display = "none";
  bddImg.style.display = "none";
}
function gitText() {
  cssImg.style.display = "none";
  htmlIMG.style.display = "none";
  areaTextImg.style.display = "none";
  jsImg.style.display = "none";
  tsImg.style.display = "none";
  gitImg.style.display = "block";
  bddImg.style.display = "none";
}
function bddText() {
  cssImg.style.display = "none";
  htmlIMG.style.display = "none";
  areaTextImg.style.display = "none";
  jsImg.style.display = "none";
  tsImg.style.display = "none";
  gitImg.style.display = "none";
  bddImg.style.display = "block";
}