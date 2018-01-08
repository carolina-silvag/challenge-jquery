$(document).ready( function(){

	console.log('listo para usar');
});

/*ocultar menu*/
$('.js-menu').hide();

/*agregar make cuando click*/
$('.js-show-make').click(appendMake);

function appendMake() {
	$('.page').addClass('make');
	/*agregando clase active a js-show-make*/
	$('.js-show-make').addClass('active');
	/*quitando clase active a js-show-recipe*/
	$('.js-show-recipe').removeClass('active');
}

/*quitar make cuando click*/
$('.js-show-recipe').click(removeMake);

function removeMake() {
	$('.page').removeClass('make');
	/*agregando clase active js-show-recipe*/
	$('.js-show-recipe').addClass('active');
	/*quitando clase active a js-show-make*/
	$('.js-show-make').removeClass('active');
}