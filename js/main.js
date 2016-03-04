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
$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var title = button.data('title') // Extract info from data-* attributes
  var photoUrl = button.data('photo-url')
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('.modal-body img').attr('src', photoUrl)
})
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