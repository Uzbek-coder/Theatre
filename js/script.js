new Swiper('.image-slider', {

	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left'
	},

	loop: true,
});

new Swiper('.slide__show-slider', {
	
	slidesPerView: 4,

	breakpoints: {
		1300: {
			slidesPerView: 4,
		},
		1220: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		}
	},

	loop: true,
});

const burger = document.querySelector('.menu__icon'),
	nav = document.querySelector('.menu__list'),
	links = document.querySelectorAll('.menu__list li');
function menu () {
	burger.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
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