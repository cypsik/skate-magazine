let nav;
let navHome;
let navItems;
let navBtn;
let navBtnBars;
let allNavItems;
let allNavLinks;
let allSections;
let sendBtn;
let closeBtn;
let popup;
let formName;
let formEmail;
let formMessage;
let footerYear;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
	changeYear();
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
	sendBtn = document.querySelector('.contact__form-button');
	closeBtn = document.querySelector('.contact__popup-close');
	popup = document.querySelector('.contact__popup');
	formName = document.querySelector('#name');
	formEmail = document.querySelector('#email');
	formMessage = document.querySelector('#message');
	footerYear = document.querySelector('.footer__year');
};

const prepareDOMEvents = () => {
	sendBtn.addEventListener('click', showPopup);
	closeBtn.addEventListener('click', closePopup);
	navBtn.addEventListener('click', handleNav);
	navHome.addEventListener('click', homeClosing);
	window.addEventListener('scroll', handleObserver);
};

const showPopup = (e) => {
	formName.value = '';
	formEmail.value = '';
	formMessage.value = '';
	popup.style.top = '100px';
	e.preventDefault();
};

const closePopup = () => {
	popup.style.top = '-400px';
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

const changeYear = () => {
	footerYear.textContent = new Date().getFullYear();
};

document.addEventListener('DOMContentLoaded', main);
