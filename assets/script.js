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

let i = 0;

const bannerDiv = document.querySelector(`#banner p`);
const slidesDirectory = `./assets/images/slideshow/`;

const bannerText = slides[0].tagLine;
bannerDiv.innerHTML = bannerText;

const bannerImage = document.querySelector(`.banner-img`);
bannerImage.src = slidesDirectory + slides[0].image;

// Increment slide on right arrow click
const arrowRight = document.getElementById(`arrow_right`);
arrowRight.addEventListener(`click`, (event) => {
  event.preventDefault();
  slideBanner(arrowRight);
});

const arrowLeft = document.getElementById(`arrow_left`);
arrowLeft.addEventListener(`click`, (event) => {
  event.preventDefault();
  slideBanner(arrowLeft);
});

function slideBanner(arrowDirection) {
  switch (arrowDirection) {
    case arrowLeft:
      i = (i || slides.length) - 1;
      console.log(i);
      break;
    case arrowRight:
      i = i < slides.length - 1 ? i + 1 : 0;
      break;
  }

  dotSelected[i].classList.add(`dot_selected`)
//   dotSelected[i].classList.remove(`dot_selected`)
  bannerImage.src = slidesDirectory + slides[i].image;
}

const dotsDiv = document.querySelector(`.dots`);
// dotsDiv.innerHTML = addBulletsPoints()

for (let index = 0; index < slides.length; index++) {
  dotsDiv.innerHTML += `<span class="dot"></span>`;
}

const dotSelected = document.querySelectorAll(`.dot`)
