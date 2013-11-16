/* controller.js
    Controller for Shopping Cart page
*/

$(function(){
	var formatLabels = {
		dvd: 'DVD',
		bluray: 'Blu-Ray'
	};

	var cartModel = createCartModel();

	var cartView = createCartView({
		model: cartModel,
		template: $('.cart-item-template'),
		container: $('.cart-items-container'),
		totalPrice: $('.total-price')
	});

	var moviesModel = createMoviesModel({
	    url: 'https://courses.washington.edu/info343/ajax/movies/'
	});

	var moviesView = createMoviesView({
	    model: moviesModel,
	    template: $('.movie-template'),
	    container: $('.movies-container')
	});

	//refresh to get movies from server
	moviesModel.refresh();
}); //doc ready()

