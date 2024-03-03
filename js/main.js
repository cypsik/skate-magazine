let nav;
let navHome;
let navItems;
let navBtn;
let navBtnBars;
let allNavItems;
let allNavLinks;
let allSections;
let footerYear;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	nav = document.querySelector('.nav');
	navHome = document.querySelector('.nav__home');
	navItems = document.querySelector('.nav-items');
	navBtn = document.querySelector('.nav-btn');
	navBtnBars = document.querySelector('.nav-btn__bars');
	allNavItems = document.querySelectorAll('.nav-items__item');
	allNavLinks = document.querySelectorAll('.nav-links__link');
	allSections = document.querySelectorAll('.section');
	footerYear = document.querySelector('.footeryear');
};

const prepareDOMEvents = () => {
	navBtn.addEventListener('click', handleNav);
	navHome.addEventListener('click', homeClosing);
	window.addEventListener('scroll', handleObserver);
};

const handleNav = () => {
	navItems.classList.toggle('nav-active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('nav-active');
		});
	});

	handleNavItemsAnimation();
	deleteAnimation();
};

const homeClosing = () => {
	navItems.classList.remove('nav-active');

	allNavItems.forEach((item) => {
		item.classList.remove('nav-items-animation');
	});
};

const handleNavItemsAnimation = () => {
	allNavItems.forEach((item, index) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = (index - 1) * 0.1 + 's';
	});
};

const deleteAnimation = () => {
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			allNavItems.forEach((el) => {
				el.classList.remove('nav-items-animation');
			});
		});
	});
};

const handleObserver = () => {
	if (window.scrollY > 90) {
		nav.classList.add('nav-background');
	} else {
		nav.classList.remove('nav-background');
	}
};

document.addEventListener('DOMContentLoaded', main);
