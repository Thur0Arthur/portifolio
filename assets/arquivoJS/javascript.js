//Menu
var MobileNavbar = /** @class */ (function () {
    function MobileNavbar(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    MobileNavbar.prototype.animateLinks = function () {
        this.navLinks.forEach(function (link, index) {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.3, "s"));
        });
    };
    MobileNavbar.prototype.handleClick = function () {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    };
    MobileNavbar.prototype.addClickEvent = function () {
        this.mobileMenu.addEventListener("click", this.handleClick);
    };
    MobileNavbar.prototype.init = function () {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    };
    return MobileNavbar;
}());
var mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();
//Menu funções de scroll
function home() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
function about() {
    window.scrollTo({
        top: 1600,
        left: 0,
        behavior: 'smooth'
    });
}
function projects() {
    window.scrollTo({
        top: 3200,
        left: 0,
        behavior: 'smooth'
    });
    goFlex();
}
function skills() {
    window.scrollTo({
        top: 4807,
        left: 0,
        behavior: 'smooth'
    });
}
//Area de sliders
var totalSliders = document.querySelectorAll('.slider-item').length;
var currentSlide = 0;
document.querySelector('.slider-width').style.width = "calc(100vw * ".concat(totalSliders, ")");
document.querySelector('.slider-controls').style.height = "".concat(document.querySelector('.slider-width').clientHeight, ".px");
function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSliders - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSliders - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}
function updateMargin() {
    var sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    var newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = "-".concat(newMargin, "px");
}
function goNone() {
    var controls = document.querySelector('.slider-controls');
    controls.style.display = 'none';
}
function goFlex() {
    var controls = document.querySelector('.slider-controls');
    controls.style.display = 'flex';
}
//AREA DOS PROJETOS DENTRO DOS SLIDERS
//pROJETO CALCULADORA
function insert(number) {
    document.querySelector('#calculator-result').innerHTML += number;
}
function clean() {
    document.querySelector('#calculator-result').innerHTML = '';
}
function back() {
    var resultArea = document.querySelector('#calculator-result').innerHTML;
    document.querySelector("#calculator-result").innerHTML = resultArea.substring(0, resultArea.length - 1);
}
function calculate() {
    var resultArea = document.querySelector('#calculator-result').innerHTML;
    if (resultArea) {
        document.querySelector('#calculator-result').innerHTML = eval(resultArea);
    }
    else {
        document.querySelector('#calculator-result').innerHTML = 'Nada..';
    }
}
//Projeto RELOGIO
var hours = document.querySelector('#horas');
var minutes = document.querySelector('#minutos');
var seconds = document.querySelector('#segundos');
var clock = setInterval(function time() {
    var dateToday = new Date();
    var hr = dateToday.getHours();
    var min = dateToday.getMinutes();
    var s = dateToday.getSeconds();
    if (hr < 10)
        hr = '0' + hr;
    if (min < 10)
        min = '0' + min;
    if (s < 10)
        s = '0' + s;
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
});
// AREA DAS FUNÇÕES DAS IMGS
var areaTextImg = document.querySelector('.sectionFour-text-click');
var htmlIMG = document.querySelector('.htmlText');
var cssImg = document.querySelector('.cssText');
var jsImg = document.querySelector('.JSText');
var tsImg = document.querySelector('.TSText');
var gitImg = document.querySelector('.gitText');
var bddImg = document.querySelector('.bddText');
function htmlText() {
    areaTextImg.style.display = "none";
    htmlIMG.style.display = "block";
    cssImg.style.display = 'none';
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
