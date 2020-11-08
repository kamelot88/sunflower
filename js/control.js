/* Слайдер_начало */

let firstElement = document.querySelector("body > header > div.navigation_header.main_flex.flex__jcontent_between");
let elementLeft = document.querySelector("body > header > div.navigation_header.main_flex.flex__jcontent_between > div.navigation_left.main_flex_column_nw.flex__jcontent_between");
let elementRight = document.querySelector("body > header > div.navigation_header.main_flex.flex__jcontent_between > div.navigation_right > nav");

window.onload = function () {
firstElement.onmouseout = function(e) {
    // elementLeft.style.left = 0 + 'px';
  };

}
   




  
/* Слайдер_конец */