//Menu
class MobileNavbar  {
  mobileMenu: any;
  navList: any;
  navLinks: any;
  activeClass: string;


    constructor(mobileMenu: string, navList: string, navLinks: string) {
      this.mobileMenu = document.querySelector(mobileMenu) as HTMLObjectElement;
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
      this.navLinks.forEach((link:any, index:any) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`) ;
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
    goFlex()
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
  
  document.querySelector<any>('.slider-width').style.width = `calc(100vw * ${totalSliders})`;
  document.querySelector<any>('.slider-controls').style.height = `${document.querySelector<any>('.slider-width').clientHeight}.px`;
  
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
    let sliderItemWidth = document.querySelector<any>('.slider-item').clientWidth
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector<any>('.slider-width').style.marginLeft = `-${newMargin}px`;
  
  }
  function goNone() {
    let controls: any = document.querySelector('.slider-controls');
    controls.style.display = 'none';
  }
  function goFlex() {
    let controls: any = document.querySelector('.slider-controls');
    controls.style.display = 'flex';
  }
  //AREA DOS PROJETOS DENTRO DOS SLIDERS
  
  //pROJETO CALCULADORA
  
  function insert(number){
    document.querySelector<any>('#calculator-result').innerHTML += number;
  }
  function clean() {
    document.querySelector<any>('#calculator-result').innerHTML = '';
  }
  function back() {
    let resultArea = document.querySelector<any>('#calculator-result').innerHTML;
    document.querySelector<any>("#calculator-result").innerHTML = resultArea.substring(0, resultArea.length - 1);
  }
  function calculate() {
    let resultArea = document.querySelector<any>('#calculator-result').innerHTML;
    if(resultArea) {
      document.querySelector<any>('#calculator-result').innerHTML = eval(resultArea);
    }else {
      document.querySelector<any>('#calculator-result').innerHTML = 'Nada..'
    }
  }
  
  //Projeto RELOGIO
  const hours: any = document.querySelector('#horas');
  const minutes: any = document.querySelector('#minutos');
  const seconds: any = document.querySelector('#segundos');
  
  const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr: string | number = dateToday.getHours();
    let min: string | number = dateToday.getMinutes();
    let s: string | number = dateToday.getSeconds();
  
    if(hr <10 )hr = '0'+ hr;
    if(min <10 )min = '0'+ min;
    if(s <10 )s = '0'+ s;
  
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
  });
  
  // AREA DAS FUNÇÕES DAS IMGS
  
  let areaTextImg: any = document.querySelector('.sectionFour-text-click');
  let htmlIMG: any = document.querySelector('.htmlText');
  let cssImg: any = document.querySelector('.cssText');
  let jsImg: any = document.querySelector('.JSText');
  let tsImg: any = document.querySelector('.TSText');
  let gitImg: any = document.querySelector('.gitText');
  let bddImg: any = document.querySelector('.bddText');
  
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