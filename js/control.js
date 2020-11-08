
$(function(){

	'use strict';

	// Начало функции для плавного перехода по якорным ссылкам на странице
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
			{
			scrollTop:$(target).offset().top
			},
			800
		);
	});
	// Конец функции для плавного перехода по якорным ссылкам на странице


	// Начало функции для закрепления кнопок header при скроулинге
	// var offset = $('#top_header').offset();

	// $(window).scroll( function(){

	// 	if( $(window).scrollTop() > offset.top ) {
	// 		$('#top_header').addClass('FixedNav');
	// 	} else {
	// 		$('#top_header').removeClass('FixedNav');
	// 	}

	// } );

// 	Для отображения панели с кнопками при скроулинге необходимо прописать стили в css для класса 'FixedNav':
// 	.FixedNav {
// 	position: fixed;
// 	top: 0;
// 	opacity: 0.7;
// 	background-color: #fff;
// 	left: 0;
// 	color: #323232;
// 	width: 100%;
// 	height: 10vh;
// 	z-index: 10;
// 	transition: 0.25s ease-in-out;
// }
// .FixedNav:hover {
// 	opacity: 1;
// }
// .FixedNav a {
// 	color: #323232 !important;
// }
// .FixedNav nav {
// 	height: inherit;
// }
	// Конец функции для закрепления кнопок header при скроулинге


	// Начало функции слайдера для мобильных устройств
	if( window.innerWidth > 1024 ) {
		$('.slide').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		autoplay: true,
 		autoplaySpeed: 2000,
	});
	} else {
		$('.slide').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
 		autoplaySpeed: 2000,
	});
}


 $('.slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


// Для родительского блока элементов слайдера необходимо добавить id="slide".
// Данный скрипт описывает условие количесвта элементов слайда на экране для мобильного
//  устройства (ширина экрана менее 1024px) и для ПК (ширина экрана, более 1024px)
// 	Конец функции слайдера для мобильных устройств

	// Начало_Кнопка добавляет блок текста к описанию

	$('#view_all_text').click(function(){
		let content = '<h3 class="text_now">Вы важны для нас, будьте с нами!</h3>';
		$('.content').append(content);
		$(this).remove();
	});
	// Конец_Кнопка добавляет блок текста к описанию


    // Начало_функция открытия/закрытия формы
    $('#modal_box, #black_fill').hide();
    $ ('.black_btn').click(function(){
        $('#modal_box, #black_fill').show();
    });
    $('#close_modal, #black_fill').click(function(){
        $('#modal_box, #black_fill').hide();
        });
    // Конец_функция открытия/закрытия формы


});

/* Слайдер_начало */

let firstElement = document.querySelector(".navigation_header");
let elementLeft = document.querySelector('.navigation_left');
let elementRight = document.querySelector('.navigation_right');
let left = 0;


firstElement.onmouseover = function(event) {
    let elementLeft = document.querySelector('.navigation_left');
    let elementRight = document.querySelector('.navigation_right');
    elementLeft.style.left = 0 + 'px';
  };


   




  
/* Слайдер_конец */