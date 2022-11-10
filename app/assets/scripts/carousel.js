if (window.location.pathname == "/gift-flow") {
  const track = document.querySelector(".carousel__track");
  const slides = Array.from(track.children);

  console.log("slides", slides);

  //When I click left move slides to the left
  const nextButton = document.querySelector(".carousel__button--right");
  const prevButton = document.querySelector(".carousel__button--left");
  const dotsNav = document.querySelector(".carousel__nav");
  const dots = Array.from(dotsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  //arrange slides next to one another
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  const removeArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add("is-hidden");
      nextButton.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.add("is-hidden");
    } else {
      prevButton.classList.remove("is-hidden");
      nextButton.classList.remove("is-hidden");
    }
  };

  //When I click right move slides to the right
  nextButton.addEventListener("click", (e) => {
    console.log("hey");
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const targetDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, targetDot);
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    removeArrows(slides, prevButton, nextButton, nextIndex);
    // // move to the next slide
    // const amountToMove = nextSlide.style.left;
    // track.style.transform = `translateX(-${amountToMove})`
    // currentSlide.classList.remove('current-slide')
    // nextSlide.classList.add('current-slide')
  });

  prevButton.addEventListener("click", (e) => {
    console.log("hey");
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const targetDot = currentDot.previousElementSibling;

    // move to the next slide
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, targetDot);
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);
    removeArrows(slides, prevButton, nextButton, prevIndex);
  });

  //When I click the nav indicators move to that slide
  dotsNav.addEventListener("click", (e) => {
    console.log("hey");
    const targetDot = e.target.closest("button");
    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    console.log(targetIndex);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    removeArrows(slides, prevButton, nextButton, targetIndex);
  });
}
