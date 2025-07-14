// JavaScript File

// Reference To Buttons
var btnLeft = document.getElementById('prev_btn');
var btnRight = document.getElementById('next_btn');

// Reference To Slider
var slider = document.querySelector('.container .slider');

btnRight.addEventListener('click', nextSlide);
function nextSlide(){
	slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide(){
	slider.prepend(slider.lastElementChild);
}

// Auto Sliding
function autoSlide(){
	deleteInterval = setInterval(timer, 2000); // 4000 mile sec = 4 sec
	function timer(){
		nextSlide();
	}
}
autoSlide();

// Stop Auto Sliding When Mouse is Over



function deleteAutoSliding(){
	clearInterval(deleteInterval);
}


