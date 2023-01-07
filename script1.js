//меню бургер
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


//класс ibg для фона
function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();


//SWIPER
new Swiper('.slider-container', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	slidesPerView: 1,
	spaceBetween: 2000,
	loop: true,
	autoHeight: true,
});