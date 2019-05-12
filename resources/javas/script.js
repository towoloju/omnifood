
$(document).ready(function() {

	/*moves to thesignup section when you click on i'm hungry button*/
	$('.js--scroll-to-signup').click(function(){
		$('html, body').animate({scrollTop:$('.js--signup').offset().top}, 1000);
	});

	/*moves to the features section when you click onshow me more and signup  button*/
	$('.js--scroll-to-features').click(function(){
		$('html, body').animate({scrollTop:$('.js-features').offset().top},1000);
	});
	/*moves to the features section when you click on food deelivery  button*/
	$('.js--food-delivery').click(function(){
		$('html, body').animate({scrollTop:$('.js--mealssection').offset().top},1000);
	});
	/*moves to the features section when you click on how it works  button*/
	$('.js--how-it-works').click(function(){
		$('html, body').animate({scrollTop:$('.js--how').offset().top}, 1000);
	});
	/*moves to the features section when you click on cities  button*/
	$('.js--our-cities').click(function(){
		$('html, body').animate({scrollTop:$('.js--cities').offset().top},1000);
	});
});
