let navItems;
let navItemsBtn;
let navBars;
let allNavItems;
let navLinks;
let navLogo;
let allSections;
let footerYear;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	navItems = document.querySelector('.nav-items');
	navItemsBtn = document.querySelector('.nav-btn');
	navBars = document.querySelector('.nav-btn__bars');
	allNavItems = document.querySelectorAll('.nav-items__item');
	navLinks = document.querySelectorAll('.nav-links__link');
	navLogo = document.querySelector('.nav__home');
	allSections = document.querySelectorAll('.section');
	footerYear = document.querySelector('.footeryear');
};

const prepareDOMEvents = () => {
	navItemsBtn.addEventListener('click', handleNav);
	window.addEventListener('scroll', handleObserver);
};

const handleNav = () => {
	navItems.classList.toggle('nav-active');

	if (navBars.classList.contains('light-background-color') && navItemsBtn.classList.contains('light-btn') && navItemsBtn.classList.contains('white')) {
		navBars.classList.remove('light-background-color');
		navItemsBtn.classList.remove('light-btn');
	} else if (!navBars.classList.contains('light-background-color') && !navItemsBtn.classList.contains('light-btn') && navItemsBtn.classList.contains('white')) {
		navBars.classList.add('light-background-color');
		navItemsBtn.classList.add('light-btn');
	}

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('nav-active');
		});
	});

	handleNavItemsAnimation();
	deleteAnimation();
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
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		const isDarkSection = section.classList.contains('dark-section');
		if (section.offsetTop <= currentSection + 60) {
			navBars.classList.toggle('light-background-color', isDarkSection);
			navItemsBtn.classList.toggle('light-btn', isDarkSection);
			navItemsBtn.classList.toggle('white', isDarkSection)

			navLogo.classList.toggle('light-color', isDarkSection);
			navLinks.forEach((link) => {
				link.style.transition = 'none';
				link.classList.toggle('light-color', isDarkSection);
				link.classList.toggle('light-links', isDarkSection);
			});
		}
	});
};

document.addEventListener('DOMContentLoaded', main);
