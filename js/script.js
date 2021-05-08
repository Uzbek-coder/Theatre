new Swiper('.image-slider', {

	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left'
	},
});

const burger = document.querySelector('.menu__icon'),
	nav = document.querySelector('.menu__list'),
	links = document.querySelectorAll('.menu__list li');
function menu () {
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
		links.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			}else {
				link.style.animation = `navLinksFade .4s ease forwards ${index/7 + .3}s`
			}
		})
	})
}

menu();