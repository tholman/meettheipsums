/* 
 *  Meet The Ipsums
 */

/* 
 *  Cache Elements;
 */

var doc = document.documentElement, body = document.body;


var header = document.querySelector( '.fixed-title' );
var headerContainer = document.querySelector( '.heading' );

var footer = document.querySelector( 'footer' );
var list = document.querySelector( 'ul' );

var carouselElements = document.querySelectorAll( 'article' );
var currentSlide = 0;
var animationTime = 750;

/* 
 *  Sizes
 */

headerContainer.className = "heading translatable";
var height = window.innerHeight;

headerContainer.style.width = window.innerWidth - 160 + "px";

footer.style.paddingTop = ((height / 2) - 90) + "px";
footer.style.height = height + "px";

list.style.marginBottom = height + "px";	


/* 
 *  Scroll Logic
 */

var active = false;
var lastElement, nextElement;
window.addEventListener( 'scroll', onScroll, false)

function onScroll( event ) {

	top = ( doc && doc.scrollTop  || body && body.scrollTop  || 0 );

	if ( active === false && (top.scrollY > 0 || top > 0) ) {

		header.className = 'fixed-title active';
		active = true;

	} else if ( top.scrollY === 0 || top ===0 ) {
		active = false;
		header.className = 'fixed-title';
	}
}

function updateCarousel() {

	lastElement = currentSlide;

	carouselElements[currentSlide].className = "fade";
	
	var execute = function() {

		var localCurrentSlide = currentSlide;
		
		return function() {
			carouselElements[localCurrentSlide].className = "";	
		}
	}();
	
	currentSlide++;
	if (currentSlide == (carouselElements.length)) {
		currentSlide = 0;
	}

	carouselElements[currentSlide].className = "active";

	setTimeout( function() {
		execute();
	}, animationTime);


}

setInterval( updateCarousel, 6000 );