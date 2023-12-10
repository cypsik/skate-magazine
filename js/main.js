const navItems = document.querySelector('.nav-items');
const navItemsBtn = document.querySelector('.nav-btn');
const allNavItems = document.querySelectorAll('.nav-items__item');

const handleNav = () => {
	navItems.classList.toggle('nav-active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('nav-active');
		});
	});
};

navItemsBtn.addEventListener('click', handleNav);
