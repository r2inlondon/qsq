const bannerMsg = document.querySelector('.banner-msg'),
    nuestrosTxt = document.querySelector('.nuestros'),
    industrias = document.querySelector('.industrias');


// function to animate.css
const observer = new IntersectionObserver(entries => { 
    entries.forEach(element => {
        if(element.isIntersecting === true){
            // nuestros.classList.add('animate__rubberBand');
            element.target.style.opacity = 1;
            element.target.classList.add('animate__bounceInLeft');
        }
    });

       
}, { threshold: [1] } );

observer.observe(bannerMsg);
observer.observe(nuestrosTxt);
observer.observe(industrias);

	// if(entries[0].isIntersecting === true){
    //     // nuestros.classList.add('animate__rubberBand');
    //     entries[0].target.style.opacity = 1;
    //     entries[0].target.classList.add('animate__bounceInLeft');
    // }

