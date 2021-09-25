const nuestros = document.querySelector('.animate__animated');

// function for animate.css
const observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
        nuestros.classList.add('animate__rubberBand');
		console.log('Element is fully visible in screen');
}, { threshold: [1] });

observer.observe(document.querySelector(".animate__animated"))