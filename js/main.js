const navItems = document.querySelector('.nav-items');
const navItemsBtn = document.querySelector('.nav-btn');
const navBars = document.querySelector('.nav-btn__bars');
const allNavItems = document.querySelectorAll('.nav-items__item');
const navLinks = document.querySelectorAll('.nav-links__link');
const navLogo = document.querySelector('.nav__home');
const allSections = document.querySelectorAll('.section');
const magazine = document.querySelector('.magazine');
// const footerYear = document.querySelector('.footeryear')

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
		if (
			section.classList.contains('dark-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBars.classList.add('light-background-color');
			navLogo.classList.add('light-color');
			magazine.classList.add('light-color');
		} else if (
			!section.classList.contains('dark-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBars.classList.remove('light-background-color');
			navLogo.classList.remove('light-color');
			magazine.classList.remove('light-color');
		}
	});
};

navItemsBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
