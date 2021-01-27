
//https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;

function plusSlidesMinus() {
    if(slideIndex === 1){
        slideIndex = 4
        showSlides(4)
    } else {
        showSlides(slideIndex --);
    }
}

function plusSlidesPlus() {
  if(slideIndex === 4){
      slideIndex = 1
      showSlides(1)
  } else {
    showSlides(slideIndex ++);
  }
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pastKrates__krate");
  var dots = document.getElementsByClassName("pastKrates__dot");

  if (n > slides.length) {
      slideIndex = 1
  }

  if (n < 1) {
      slideIndex = slides.length
  }


  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

export {showSlides, plusSlidesPlus, plusSlidesMinus, slideIndex}