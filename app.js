const nuestros = document.querySelector('.nuestros-txt');

// function to animate.css
const observer = new IntersectionObserver(function(entries) {
    console.log(entries);
	if(entries[0].isIntersecting === true)
        // nuestros.classList.add('animate__rubberBand');
        entries[0].target.classList.add('animate__rubberBand');
}, { threshold: [1] });

observer.observe(nuestros);
