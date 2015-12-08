jQuery(document).ready(function($){
	//open menu
	$('.main-trigger').on('click', function(event){
		event.preventDefault();
		$('#intro-content').addClass('move-out');
		$('#main-content').addClass('is-visible');
		$('.shadow-layer').addClass('is-visible');
	});
    
    $('#btn1').on('click', function(event){
		event.preventDefault();
		$('#main-content').addClass('move-out');
		$('#video').addClass('is-visible');
		$('.shadow-layer').addClass('is-visible');
        $('#intro-content').addClass('blur');
	});
    
    $('#btn2').on('click', function(event){
		event.preventDefault();
		$('#main-content').addClass('move-out');
		$('#graph').addClass('is-visible');
		$('.shadow-layer').addClass('is-visible');
        $('#intro-content').addClass('blur');
	});
    
    $('#btn3').on('click', function(event){
		event.preventDefault();
		$('#main-content').addClass('move-out');
		$('#info').addClass('is-visible');
		$('.shadow-layer').addClass('is-visible');
        $('#intro-content').addClass('blur');
	});
    
    //close menu
	$('.close-menu').on('click', function(event){
		event.preventDefault();
		$('#main-content').removeClass('move-out');
		$('.popout-content').removeClass('is-visible');
		$('.shadow-layer').removeClass('is-visible');
	});
});