//Navigation Part

const nav = document.querySelector("ul");
const icon = document.querySelector(".icon-small");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

icon.addEventListener("click" , function(){
   nav.classList.toggle("custom-height4");
   line1.classList.toggle("rotate-line1");
   line2.classList.toggle("rotate-line2");
   shopnav.classList.remove("custom-height-shop");
});

const shopnav = document.querySelector(".shop-div");
const shopicon = document.querySelector(".shopicon");


shopicon.addEventListener("click" , function(){
shopnav.classList.toggle("custom-height-shop");
searchnav.classList.remove("custom-height-search");
nav.classList.remove("custom-height4");
line1.classList.remove("rotate-line1");
   line2.classList.remove("rotate-line2");
});

const searchnav = document.querySelector(".search-div");
const searchicon = document.querySelector(".searchicon");


searchicon.addEventListener("click" , function(){
searchnav.classList.toggle("custom-height-search");
shopnav.classList.remove("custom-height-shop");
});



//Slider Part

const pics = document.querySelectorAll(".slider-img");
const pic1 = document.querySelector(".slider-img");
const iconLeft = document.querySelector(".left");
const iconRight = document.querySelector(".right");
let imageWidth = pic1.clientWidth;
let activeIndex = 0;

iconLeft.addEventListener("click", function () {
    activeIndex--;
    if (activeIndex <= -1) {
        activeIndex = 4;
    }
    pic1.style.marginLeft = `-${activeIndex * imageWidth}px`;
})

iconRight.addEventListener("click", function () {
    activeIndex++;
    if (activeIndex >= pics.length) {
        activeIndex = 0;
    }
    pic1.style.marginLeft = `-${activeIndex * imageWidth}px`;
});

//FooterNav Part

const nav1 = document.querySelector(".listbox1");
const icon1 = document.querySelector(".listbox1");
const plus1 = document.querySelector(".plus1");

icon1.addEventListener("click" , function(){
   nav1.classList.toggle("custom-height");
   plus1.classList.toggle("rotateplus");
});

const nav2 = document.querySelector(".listbox2");
const icon2 = document.querySelector(".listbox2");
const plus2 = document.querySelector(".plus2");

icon2.addEventListener("click" , function(){
   nav2.classList.toggle("custom-height");
   plus2.classList.toggle("rotateplus");
});

const nav3 = document.querySelector(".listbox3");
const icon3 = document.querySelector(".listbox3");
const plus3 = document.querySelector(".plus3");

icon3.addEventListener("click" , function(){
   nav3.classList.toggle("custom-height");
   plus3.classList.toggle("rotateplus");
});

const nav4 = document.querySelector(".listbox4");
const icon4= document.querySelector(".listbox4");
const plus4 = document.querySelector(".plus4");

icon4.addEventListener("click" , function(){
   nav4.classList.toggle("custom-height2");
   plus4.classList.toggle("rotateplus");
});

const nav5 = document.querySelector(".listbox5");
const icon5= document.querySelector(".listbox5");
const plus5 = document.querySelector(".plus5");

icon5.addEventListener("click" , function(){
   nav5.classList.toggle("custom-height2");
   plus5.classList.toggle("rotateplus");
});

const nav6 = document.querySelector(".listbox6");
const icon6= document.querySelector(".listbox6");
const plus6 = document.querySelector(".plus6");

icon6.addEventListener("click" , function(){
   nav6.classList.toggle("custom-height3");
   plus6.classList.toggle("rotateplus");
});

const nav7 = document.querySelector(".listbox7");
const icon7= document.querySelector(".listbox7");
const plus7 = document.querySelector(".plus7");

icon7.addEventListener("click" , function(){
   nav7.classList.toggle("custom-height3");
   plus7.classList.toggle("rotateplus");
});

const nav8 = document.querySelector(".listbox8");
const icon8= document.querySelector(".listbox8");
const plus8 = document.querySelector(".plus8");

icon8.addEventListener("click" , function(){
   nav8.classList.toggle("custom-height3");
   plus8.classList.toggle("rotateplus");
});

const nav9 = document.querySelector(".listbox9");
const icon9= document.querySelector(".listbox9");
const plus9 = document.querySelector(".plus9");

icon9.addEventListener("click" , function(){
   nav9.classList.toggle("custom-height3");
   plus9.classList.toggle("rotateplus");
});

const nav10 = document.querySelector(".listbox10");
const icon10= document.querySelector(".listbox10");
const plus10 = document.querySelector(".plus10");

icon10.addEventListener("click" , function(){
   nav10.classList.toggle("custom-height3");
   plus10.classList.toggle("rotateplus");
});