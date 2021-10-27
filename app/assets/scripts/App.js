import '../../assets/fonts/stylesheet.css';

import '../styles/styles.css';
import 'lazysizes';
import toggle from './modules/FAQ.js';
import {
	showSlides,
	plusSlidesMinus,
	plusSlidesPlus,
	slideIndex,
} from './modules/PastKrates.js';

if (module.hot) {
	module.hot.accept();
}

//Building FAQ dropdown

var faqList = Array.from(document.querySelectorAll('.FAQ'));

faqList.forEach((faq) => {
	faq.addEventListener(
		'click',
		function (event) {
			// Prevent default link behavior
			event.preventDefault();
			// Get the content
			var content = this.children[1];
			if (!content) return;
			// Toggle the content
			toggle(content);
		},
		false
	);
});

//Getting pastkrates animation to work

showSlides(slideIndex);

var prev = document.querySelector('.pastKrates__prev');
prev.addEventListener('click', plusSlidesMinus);

var prev = document.querySelector('.pastKrates__next');
prev.addEventListener('click', plusSlidesPlus);

// Nav bar stuff
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');

// so we don't error on other pages
if (hamburger) {
	hamburger.addEventListener('click', mobileMenu);
}

// opens the mobile menu and activates overlay
function mobileMenu() {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
	navOverlay.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

// so we don't error on other pages
if (navLink) {
	navLink.forEach((n) => n.addEventListener('click', closeMenu));
}

// closes the mobile menu and deactivates overlay
function closeMenu() {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
	navOverlay.classList.remove('active');
}

var homebtn = document.querySelector('.btntest');
homebtn.addEventListener('click', getReChargeCheckout);


var buttonsArray = Array.from(document.querySelectorAll('.btnredirect'));

buttonsArray.forEach(button => {
	button.addEventListener('click', getReChargeCheckout)
})


async function getReChargeCheckout () {

	alert('worked')

	const response = await fetch('https://9dbda4a7f5ca.ngrok.io/rechargeCheckout', {
		method: 'POST', 
		mode: 'cors', 
		cache: 'no-cache',
		headers: {
			'Content-Type':'application'
		}
		
	})

	const data = await response.json()

	//console.log('worked', data)

	const url = `https://checkout.rechargeapps.com/r/checkout/${data.token}`
	console.log(url)
	window.location.href = url; 

	//response.json().then(data => console.log('here', data))



}

//Building FAQ dropdown

// var faqList = Array.from(document.querySelectorAll('.FAQ'));

// faqList.forEach((faq) => {
// 	faq.addEventListener(
// 		'click',
// 		function (event) {
// 			// Prevent default link behavior
// 			event.preventDefault();
// 			// Get the content
// 			var content = this.children[1];
// 			if (!content) return;
// 			// Toggle the content
// 			toggle(content);
// 		},
// 		false
// 	);
// });