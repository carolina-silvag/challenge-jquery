$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	renderActivities(activities);
});

/*ocultar flecha*/
$('.js-back').hide();

/*funcion pintar noticias*/
function printNews() {
	$('#newRecipe').append('Nuevas Recetas');
}
printNews();

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {

	for (var i = 0; i<recipesArray.length; i++){
		if(recipesArray[i]['highlighted'] == true) {
			console.log(true);
			renderRecipe(recipesArray[i]);
		}
	}
	/*console.log('Recipes: ', recipesArray);*/
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	/*console.log('Voy a pintar la receta: ', recipe);*/
	$('.list-recipes').append('<div><a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+recipe['title']+' </span><span class="metadata-recipe"><span class="author-recipe">'+recipe['source']['name']+'</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+recipe['name']+'.jpg" /></a></div>')
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	for (var i = 0; i<activitiesArray.length; i++){
		if(activitiesArray.length != undefined) {
			$('.wrapper-message').hide();
			renderActivity(activitiesArray[i]);
		}
	}
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
_.templateSettings.variable = 'rc';
var template = _.template(
	$('script.template').html()
);

function renderActivity(recipe) {
	$('.list-activities').append(template(recipe))
}


