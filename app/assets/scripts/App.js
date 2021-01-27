

import '../../assets/fonts/stylesheet.css'

import '../styles/styles.css'
import 'lazysizes'
import toggle from './modules/FAQ.js'
import {showSlides, plusSlidesMinus, plusSlidesPlus, slideIndex} from './modules/PastKrates.js'



if(module.hot){
    module.hot.accept()
}


//Building FAQ dropdown

var faqList = Array.from(document.querySelectorAll('.FAQ'))

faqList.forEach(faq => {
    faq.addEventListener('click', function (event) {  
        // Prevent default link behavior
        event.preventDefault();  
        // Get the content
        var content = this.children[1];
        if (!content) return;
        // Toggle the content
        toggle(content);
    }, false)
})

//Getting pastkrates animation to work 

showSlides(slideIndex);

var prev = document.querySelector('.pastKrates__prev')
prev.addEventListener('click', plusSlidesMinus)

var prev = document.querySelector('.pastKrates__next')
prev.addEventListener('click', plusSlidesPlus)

