/* Слайдер_начало */

//дожидаемся полной загрузки страницы
window.onload = function () {
  //ищем элементы по селектору
  var firstElement = document.querySelector("body > header > div.navigation_header.main_flex.flex__jcontent_between");
  var elementLeft = document.querySelector("body > header > div.navigation_header.main_flex.flex__jcontent_between > div.navigation_left.main_flex_column_nw.flex__jcontent_between");
  var elementRight = document.querySelector("body > header > div.navigation_header.main_flex.flex__jcontent_between > div.navigation_right");
  //вешаем на него события
  firstElement.onmouseout = function(e) {
    elementLeft.style.left= -48 + '%';
    elementRight.style.right= -30 + '%';
  }
  firstElement.onmouseover = function(e) {
    elementLeft.style.left= 0 + '%';
    elementRight.style.right= 0 + '%';
  }
}