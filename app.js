const bannerMsg = document.querySelector(".banner-msg"),
  nuestrosTxt = document.querySelector(".nuestros"),
  industrias = document.querySelector(".industrias"),
  arrows = document.querySelector(".arrow"),
  loaderPage = document.querySelector(".loader-page"),
  loaderTxt = document.querySelector(".loader-txt"),
  pageWrapper = document.querySelector(".wrapper");

const removeLoader = () => {
  loaderPage.classList.add("fadeOut");
  loaderTxt.classList.add("fadeOut");

  loaderPage.addEventListener("animationend", () => {
    loaderTxt.style.display = "none";
    loaderPage.style.display = "none";
    pageWrapper.style.display = "inline";
  });
};

window.onload = () => {
  removeLoader();
};

// function to animate.css
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((element) => {
      if (element.isIntersecting === true) {
        // nuestros.classList.add('animate__rubberBand');
        element.target.style.opacity = 1;
        element.target.classList.add("animate__bounceInLeft");
      }
    });
  },
  { threshold: [0.8] }
);

observer.observe(bannerMsg);
observer.observe(nuestrosTxt);
observer.observe(industrias);

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y > 50) {
    arrows.style.display = "none";
  }
});
