
window.onload=function(){
        function debounce(func, wait, immediate) {
            var timeout;

            return function executedFunction() {
            var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};

        const sliderImages= document.querySelectorAll('.slide-in');

        function checkSlide(e)
        {
            sliderImages.forEach(sliderImage =>{
                
                const slideInAt= (window.scrollY + window.innerHeight) - sliderImage.height/2;
                const imageBottom= sliderImage.offsetTop + sliderImage.height;
                const isHalfShown= slideInAt > sliderImage.offsetTop;
                const isNotScrolledPast= window.scrollY < imageBottom;

                if( isHalfShown && isNotScrolledPast)
                {
                    sliderImage.classList.add('active');
                }
                else
                {
                    sliderImage.classList.remove('active');
                }
            });        
        }

        window.addEventListener('scroll', debounce(checkSlide));
    }