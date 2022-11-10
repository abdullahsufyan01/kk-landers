
import "../../assets/fonts/stylesheet.css";


import "../styles/styles.css";
import "lazysizes";
import toggle from "./modules/FAQ.js";
import {
  showSlides,
  plusSlidesMinus,
  plusSlidesPlus,
  slideIndex,
} from "./modules/PastKrates.js";

import "./carousel"

if (module.hot) {
  module.hot.accept();
}

// //Building Gift Slider
// const slides = document.querySelectorAll(".slide-gift");
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translate(${indx * 100}%)`;
// });

// // current slide counter
// let curSlide = 0;

// // maximum number of slides
// let maxSlide = slides.length - 1;

// // select next slide button
// const nextSlide = document.querySelector(".btn-gift-next");

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   //   move slide by -100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// // select prev slide button
// const prevSlide = document.querySelector(".btn-gift-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

var giftOptions = document.querySelectorAll(".gift-option");

var giftPrice = 45.99;
var total = 137.97;
var originalTotal = 149.97
var frequency = 'Quarterly'

console.log(giftOptions);

giftOptions.forEach((node) =>
  node.addEventListener("click", (e) => {
    var nodesWithHover = document.querySelectorAll(".gift-option-selected");
    if (nodesWithHover.length !== 0) {
      nodesWithHover.forEach((node) =>
        node.classList.remove("gift-option-selected")
      );
    }
    e.target.closest(".gift-option").classList.add("gift-option-selected");
    // e.target.closest.classList.add('gift-option-selected')
    giftPrice = e.target.closest(".gift-option").dataset.price;
    giftPrice = parseFloat(giftPrice);
    console.log(typeof giftPrice);
    if (giftPrice === 39.99) {
      total = giftPrice * 12;
			originalTotal = 599.88;
			frequency = 'Annually';
    } else if (giftPrice === 43.99) {
      total = giftPrice * 6;
			originalTotal = 299.94
			frequency = 'Bi-Annually';
    } else if (giftPrice === 45.99) {
      total = giftPrice * 3;
			originalTotal = 149.97
			frequency = 'Quarterly';
    } else {
      total = 49.99;
			originalTotal = 0
    }

		if (originalTotal === 0){
			document.querySelector(".gift-totalPrice").innerHTML = `
			Total: ${total.toFixed(2)}
		`;
			document.querySelector(".gift-cancel").innerHTML = `
			Billed Monthly.  Cancel Anytime!
			`



		} else {
			document.querySelector(".gift-totalPrice").innerHTML = `
			Total: <span class="gift-totalPrice--discount">${originalTotal.toFixed(2)} </span> ${total.toFixed(2)}
		`;
			document.querySelector(".gift-cancel").innerHTML = `
			Billed ${frequency}.  Cancel Anytime!
			`
		}

  
  })
);

//Other carousel using flexbox
// let carousel = document.querySelector(".carousel-gift");
// let left = document.querySelector(".left-gift");
// let right = document.querySelector(".right-gift");
// let item = document.querySelector(".item-gift");

// right.addEventListener("click", function (e) {
//   console.log("hey");
//   carousel.scrollLeft += item.clientWidth;
// });
// left.addEventListener("click", function () {
//   console.log("hey");
//   carousel.scrollLeft -= item.clientWidth;
// });

//Building FAQ dropdown

var faqList = Array.from(document.querySelectorAll(".FAQ"));

faqList.forEach((faq) => {
  faq.addEventListener(
    "click",
    function (event) {
      // Prevent default link behavior
      event.preventDefault();
			console.log('clicked')
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

var prev = document.querySelector(".pastKrates__prev");
prev.addEventListener("click", plusSlidesMinus);

var prev = document.querySelector(".pastKrates__next");
prev.addEventListener("click", plusSlidesPlus);

// Nav bar stuff
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navOverlay = document.querySelector(".nav-overlay");

// so we don't error on other pages
if (hamburger) {
  hamburger.addEventListener("click", mobileMenu);
}

// opens the mobile menu and activates overlay
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navOverlay.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

// so we don't error on other pages
if (navLink) {
  navLink.forEach((n) => n.addEventListener("click", closeMenu));
}

// closes the mobile menu and deactivates overlay
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navOverlay.classList.remove("active");
}

// var homebtn = document.querySelector('.btntest');
// homebtn.addEventListener('click', getReChargeCheckout);

var buttonsArray = Array.from(document.querySelectorAll(".btnredirect"));

buttonsArray.forEach((button) => {
  button.addEventListener("click", function () {
    var discountCode = "";
    window.dataLayer = window.dataLayer || [];

    //Running function based on discountCode
    if (window.location.pathname == "/spookybogo") {
      console.log("this worked");
      discountCode = "SPOOKYBOGO";
    }

    if (window.location.pathname == "/25-off") {
      discountCode = "FIRST25OFF";
    }

    if (window.location.pathname == "/stay-25") {
      discountCode = "FIRST25OFF";
    }

    if (window.location.pathname == "/bogo") {
      discountCode = "2021BOGO";
    }

    if (window.location.pathname == "/spookybogorecharge") {
      discountCode = "SPOOKYBOGO";
    }

    if (window.location.pathname == "/subscribe-bogo") {
      discountCode = "2021BOGO";
    }

    if (window.location.pathname == "/msa-bogo") {
      discountCode = "MSABOGO";
    }

    if (window.location.pathname == "/bf-bogo") {
      discountCode = "BFBOGO";
    }

    if (window.location.pathname == "/cm-bogo") {
      discountCode = "CMBOGO";
    }

    if (window.location.pathname == "/merry-bogo") {
      discountCode = "MERRY-BOGO";
    }

    if (window.location.pathname == "/newyear-bogo") {
      discountCode = "NYBOGO";
    }

    if (window.location.pathname == "/ketogenicplus") {
      discountCode = "KETOGENICPLUS";
    }

    if (window.location.pathname == "/newyear") {
      discountCode = "NEWYEAR";
    }

    if (window.location.pathname == "/bogoplus") {
      discountCode = "FALLBOGO";
    }

    if (window.location.pathname == "/25plus") {
      discountCode = "25plus";
    }

    if (window.location.pathname == "/ketoguide") {
      discountCode = "ketoguide";
    }

    if (window.location.pathname == "/kkguide") {
      discountCode = "ketoguide";
    }

    if (window.location.pathname == "/fabfitfun") {
      discountCode = "fabfitfun";
    }

    if (window.location.pathname == "/lowcarbyum") {
      discountCode = "LOWCARBYUM40";
    }

    if (window.location.pathname == "/memorialday") {
      discountCode = "MEMORIALDAY";
    }

    if (window.location.pathname == "/summer") {
      discountCode = "FIRST30OFF";
    }
		if (window.location.pathname == "/gift-flow"){
			discountCode = "GIFT**&"
		}

    getReChargeCheckout({ discountCode });
  });
});

function getReChargeCheckout(data = {}) {

	if (data.discountCode === "GIFT**&"){
		data = {
			discountCode: 'GIFT**&',
			price: total
		}
	}

  document.getElementsByClassName("overlay")[0].style.display = "flex";
  document.getElementsByClassName("container")[0].style.display = "flex";
  document.getElementsByClassName("loader2")[0].style.display = "flex";

  fetch("http://localhost:80/reChargeCheckout", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementsByClassName("overlay")[0].style.display = "none";
      document.getElementsByClassName("container")[0].style.display = "none";
      document.getElementsByClassName("loader2")[0].style.display = "none";
      const url = `https://checkout.ketokrate.com/r/checkout/${data.token}`;
      window.location.href = url;
    });

  //response.json().then(data => console.log('here', data))
}

// async function getReChargeCheckout () {

// 	alert('worked')

// 	const response = await fetch('https://hoiland-klaviyo-properties.herokuapp.com/rechargeCheckout', {
// 		method: 'POST',
// 		mode: 'cors',
// 		cache: 'no-cache',
// 		headers: {
// 			'Content-Type':'application'
// 		}

// 	})

// 	const data = await response.json()

// 	//console.log('worked', data)

// 	const url = `https://checkout.rechargeapps.com/r/checkout/${data.token}`
// 	console.log(url)
// 	window.location.href = url;

// 	//response.json().then(data => console.log('here', data))

// }

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
