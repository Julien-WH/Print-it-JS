const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Default index for the current slide
let currentSlideIndex = 0;

// Path for the slideshow's images
const slidesDirectory = `./assets/images/slideshow/`;

// Select the banner paragraph
const bannerText = document.querySelector(`#banner p`);
// Select the banner image
const bannerImage = document.querySelector(`.banner-img`);

// Bullet point management
const dotsContainer = document.querySelector(`.dots`);

for (let i = 0; i < slides.length; i++) {

  const dot = document.createElement(`div`);
  dot.className = `dot ${i === 0 ? `dot_selected` : ``}`; // if index is 0 add class dot_selected, else stay empty
  dot.addEventListener(`click`, () => {
    updateCarousel(i)
  });
  dotsContainer.append(dot);   
}

// Select all div with .dot class
const dots = dotsContainer.querySelectorAll(`.dot`);

// Right arrow
const arrowRight = document.getElementById(`arrow_right`);
arrowRight.addEventListener(`click`, (event) => {
  event.preventDefault();
  const nextSlideIndex = currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0;
  updateCarousel(nextSlideIndex)
});

// Left arrow
const arrowLeft = document.getElementById(`arrow_left`);
arrowLeft.addEventListener(`click`, (event) => {
  event.preventDefault();
  const nextSlideIndex = (currentSlideIndex || slides.length) - 1;
  updateCarousel(nextSlideIndex)
});


// Carousel slides update
function updateCarousel(slideIndex) {
	
	const slide = slides[slideIndex]  
	
	bannerImage.src = slidesDirectory + slide.image;
	bannerText.innerHTML = slide.tagLine;
  
	document.querySelector(`.dot_selected`)?.classList.remove(`dot_selected`);
	dots[slideIndex].classList.add(`dot_selected`);

	currentSlideIndex = slideIndex
}