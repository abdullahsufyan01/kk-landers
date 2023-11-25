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

import "./carousel";
import {getReChargeCheckout} from './helpers.js'
import { forEach } from "lodash";

/******* ADDING IN SECTION FOR HOT LOADING DURING DEV *******/
if (module.hot) {
  module.hot.accept();
}

/******* CHECKING IF ON GIFT HOMEPAGE *******/
if (window.location.pathname == "/gift-flow") {
  var giftOptions = document.querySelectorAll(".gift-option");

  var giftPrice = 45.99;
  var total = 137.97;
  var originalTotal = 149.97;
  var frequency = "3";

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
      if (giftPrice === 39.99) {
        total = giftPrice * 12;
        originalTotal = 599.88;
        frequency = "12";
      } else if (giftPrice === 43.99) {
        total = giftPrice * 6;
        originalTotal = 299.94;
        frequency = "6";
      } else if (giftPrice === 45.99) {
        total = giftPrice * 3;
        originalTotal = 149.97;
        frequency = "3";
      } else {
        total = 49.99;
        originalTotal = 0;
      }

      if (originalTotal === 0) {
        document.querySelector(".gift-totalPrice").innerHTML = `
			Total: ${total.toFixed(2)}
		`;
        document.querySelector(".gift-cancel").innerHTML = `
			Billed Once for 1 month of KetoKrate!
			`;
      } else {
        document.querySelector(".gift-totalPrice").innerHTML = `
			Total: <span class="gift-totalPrice--discount">${originalTotal.toFixed(
        2
      )} </span> ${total.toFixed(2)}
		`;
        document.querySelector(".gift-cancel").innerHTML = `
      Your giftee will receive ${frequency} Krates over ${frequency} months!
			`;
      }
    })
  );
  var giftButton = document.querySelector(".btnredirect-message")
  giftButton.addEventListener("click", function(){
    console.log('in the gift click')
    sessionStorage.setItem("gift-price", total)
    window.location.href = "/gift-message"
  })  
} else if (window.location.pathname == "/gift-message")  {
  /******* CHECKING IF ON GIFT MESSAGE PAGE *******/
  var checkoutbtn = document.querySelectorAll(".gift-checkout-btn")
  checkoutbtn.forEach(btn => {
    btn.addEventListener("click", function(){
      var message = document.querySelector(".gift-message-input").value
      var firstName = document.querySelector(".giftee-name").value
      var lastName = document.querySelector(".gifter-name").value
      var gift_info = {
        discountCode: "GIFT**&",
        price: sessionStorage.getItem("gift-price"),
        message: message,
        firstName: firstName,
        lastName: lastName
      }
      console.log(gift_info)
      getReChargeCheckout(gift_info)
     
    })
  })
  
} else {
  /******* CREATING FAQ *******/
  var faqList = Array.from(document.querySelectorAll(".FAQ"));

  faqList.forEach((faq) => {
    faq.addEventListener(
      "click",
      function (event) {
        // Prevent default link behavior
        event.preventDefault();
        console.log("clicked");
        // Get the content
        var content = this.children[1];
        if (!content) return;
        // Toggle the content
        toggle(content);
      },
      false
    );
  });
  /******* CREATING PAST KRATES *******/
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
  var buttonsArray = Array.from(document.querySelectorAll(".btnredirect"));

buttonsArray.forEach((button) => {
  button.addEventListener("click", function () {
    console.log("is working");
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
    if (window.location.pathname == "/gift-flow") {
      discountCode = "GIFT**&";
    }

    if (window.location.pathname == "/blackfriday") {
      discountCode = "BLKFRIYAY";
    }

    if (window.location.pathname == "/cybermonday") {
      discountCode = "CMGT2022";
    }

    if (window.location.pathname == "/beyond") {
      discountCode = "KRATEBEYOND";
    }

    if (window.location.pathname == "/bundle") {
      discountCode = "THEKRATEBEYOND";
    }

    if (window.location.pathname == "/snackfun") {
      discountCode = "SNACKFUN";
    }
    if (window.location.pathname == "/prepaid"){
      discountCode = "12monthprepaid"
    }

    if (window.location.pathname == "/cybermonday"){
      discountCode = "1monthprepaid"
    }

    getReChargeCheckout({ discountCode });
  });
});

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



