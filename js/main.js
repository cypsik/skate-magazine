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

const handleLightColor = () => {
	navBars.classList.toggle('light-background-color');
}

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		const isDarkSection = section.classList.contains('dark-section');

		if (section.offsetTop <= currentSection + 60) {
			navBars.classList.toggle('light-background-color', isDarkSection);
			navLogo.style.color = isDarkSection ? '#fff' : '';
			magazine.style.color = isDarkSection ? '#fff' : '';

			navLinks.forEach((link) => {
				link.style.transition = 'none';
				link.style.color = isDarkSection ? '#fff' : '';
				link.classList.toggle('light-links', isDarkSection);
			});

			setTimeout(() => {
				navLinks.forEach((link) => {
					link.style.transition = ''; // Usuwanie ustawienia przejścia
				});
			}, 10);
		}
	});
};

navItemsBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
