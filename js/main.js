$(function(){
	console.log('page loaded');
	$('.social-hidden').click(openMenu);
	$(window).on('hashchange', function() {
		var page = window.location.hash;
		console.log(page);
		router(page);
	});
	route(window.location.hash);
    
    
    
    $('.item').popover({
        trigger: 'focus',
        animation: true,
        container: 'body'
    });
});
function openMenu(){
	$('#menu a img').toggleClass('soc-button', 250);
	$('#menu').toggleClass('social-banner', 250);
}
function router( str ) {
	if(str === '#projects'){
		$('.page').addClass('inactive');
		$('#projects').removeClass('inactive');
		return;
	}
	if(str === '#contact'){
		$('.page').addClass('inactive');
		$('#contact').removeClass('inactive');
		return;
	}
	if(str === '#work'){
		$('.page').addClass('inactive');
		$('#work').removeClass('inactive');
		return;
	}
	$('.page').addClass('inactive');
	$('#home').removeClass('inactive');
	window.location.hash = '#home';
}