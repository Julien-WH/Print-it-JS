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

let currentSlideIndex = 0;
const slidesDirectory = `./assets/images/slideshow/`;
const bannerText = document.querySelector(`#banner p`);
const bannerImage = document.querySelector(`.banner-img`);

//Adding bullet points
const dotsContainer = document.querySelector(`.dots`);

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement(`div`);
  dot.className = `dot ${i === 0 ? `dot_selected` : ``}`;
  dot.addEventListener(`click`, () => {
    updateCarousel(i)
  });
  dotsContainer.append(dot);   
}

const dots = dotsContainer.querySelectorAll(`.dot`);

const arrowRight = document.getElementById(`arrow_right`);
arrowRight.addEventListener(`click`, (event) => {
  event.preventDefault();
  const nextSlideIndex = currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0;
  updateCarousel(nextSlideIndex)
});

const arrowLeft = document.getElementById(`arrow_left`);
arrowLeft.addEventListener(`click`, (event) => {
  event.preventDefault();
  const nextSlideIndex = (currentSlideIndex || slides.length) - 1;
  updateCarousel(nextSlideIndex)
});


function updateCarousel(slideIndex) {
	
	const slide = slides[slideIndex]  
	if (slide === undefined) return
	
	bannerImage.src = slidesDirectory + slide.image;
	bannerText.innerHTML = slide.tagLine;
  
	document.querySelector(`.dot_selected`)?.classList.remove(`dot_selected`);
	dots[slideIndex].classList.add(`dot_selected`);

	currentSlideIndex = slideIndex
}