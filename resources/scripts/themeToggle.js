// Dark Theme Global JS (by Yusuf)

const html = document.querySelector('html');
// const images = document.querySelectorAll('img');
// const pictures = document.querySelectorAll('pictures');
// const videos = document.querySelectorAll('video');

const themeToggle = document.querySelector('.theme-toggle');
const themeToggleText = document.querySelector('.theme-toggle-text');

let darkMode = false;

// function inverter(elements) {
// 	if (darkMode) {
// 		elements.forEach(element => element.classList.add('invert'));
// 	} else {
// 		elements.forEach(element => element.classList.remove('invert'));
// 	}
// };

function toggleTheme() {
	darkMode = !darkMode;

	if (darkMode) {
		html.setAttribute('theme', 'dark');
		themeToggleText.textContent = 'Dark Mode';
		// themeToggleText.style.color = 'white';
	} else {
		html.setAttribute('theme', 'light');
		themeToggleText.textContent = 'Light Mode';
		// themeToggleText.style.color = 'black';
	};
};

themeToggle.addEventListener('change', toggleTheme);