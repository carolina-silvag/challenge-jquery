$(document).ready( function(){

	console.log('listo para usar');
});

/*ocultar menu*/
$('.js-menu').hide();

/*agregar make cuando click*/
$('.js-show-make').click(appendMake);

function appendMake() {
	$('.page').addClass('make');
}

/*quitar make cuando click*/
$('.js-show-recipe').click(removeMake);

function removeMake() {
	$('.page').removeClass('make');
}