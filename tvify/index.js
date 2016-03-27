// $(document).ready(function () {
// 	// using vanilla javascript
// 	var header = document.getElementById('app-header'); // this is the header element
// 	var header = $('header');// this is a jquery object
// 	console.log(header);

// 	var $h1 = $('h1');
// 	var $h1b = $('h1');
// 	console.log($h1 === $h1b); // false cuz they are not the same object
// 	console.log($h1[0] === $h1b[0]); // true cuz the DOM element inside the object is te same



// 	// using jquery
// 	$('p').filter('.text'); // this get all the p that contains the class text

// // preserve the selection 
// 	var ps =  $('p'); // if we made a selection of p 
//  // and latter insert an other p into the DOM
// 	var p = document.createElement('p'); 
// 	document.body.appendChild(p); 
// // if you don't add the created element to the selection you can se him
// 	ps = ps.add(p);
// //  the selections doesn't updated by it self

// 	var h1 = $('h1'); // when you call JQuery with an string 
// 	console.log(h1);//he gonna search by these element
// 	var h1 = $('#app-header h1'); // when you call JQuery with an string 
// 	console.log(h1);//he gonna search by these element

// 	var h2 = $('h1 + h2');// all the h2 that are brothers of an h1
// 	console.log(h2);		//in the same container at the same level

// 	// you must use $ for the JQuery objects
// 	var $header = $('header');//we are sending the DOM element
// 	var title = $('h1', header[0]); //to get all the h1 inside the header
// 						// in the [0] is the element, the DOM ELEMENT
// 	var headings = $('h1, h2'); //get all the h1 and all the h2
// 	console.log(headings);

// 	var header = document.getElementById('app-header');
// 	var selection = $([document, header]);


// 	$(':input');// get all the <input>, textarea, button
// 	$(':enabled'); //get all the elements enabled
// 	$(':checkbox');



// // CREATING ELEMENTS WITH JQUERY

// 	// var a = $('<a>', {
// 	// 	//here you can insert all the attributes that you like to put to the <a>
// 	// 	href: 'http://www.google.com',
// 	// 	target: '_blank',
// 	// 	html: 'ola k ase'
// 	// });

// 	$('#app-body').append(a[0]);// if you don't like that the insertion go to the end of the document
// 								// just make a selection to the item where you like to insert this

// 	// to change some attribute
// 	a.attr('href', 'http://medshop.com'); // this is a setter method and opperates over all the a objects

// // ADD CLASSES TO AN ELEMENT
// 	a.addClass('danger');

// 	$('h2').addClass('danger');

// // REMOVE OR PUT CLASS AFTER A DELAY
// 	setTimeout(function() {// this allows to execute a function after a specific time
// 		$('h2').toggleClass('danger'); // toggle is like a switch, is is on turn of  and if is off turn on
// 	}, 1500);

// // EDITING THE CSS OF AN ELEMENT

// // $('h1').css({
// // 	'font-size': '70px',
// // 	'color': 'blue'
// // });

// });

// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////


$(function() {

	$('#app-body')
		.find('form')
		.submit(function(ev){
			ev.preventDefault();// para evitar que envie el formulario y se recargue la pantalla
			console.log(this);// this es el elemento seleccionado y al que se le asigna la funcion
			var searchText = $(this)
				.find('input[type="text"]')
				.val();
			alert('ola k ase madafla: ' + searchText);
		});

//  la url para el ajax se puede poner como 
// primer parametro o adentro del objeto como parametro

	// $.ajax('http://api.tvmaze.com/shows', {
		//success: ...... 
	// });

	var template = '<article class="tv-show">' +
					'<div class="left img-container">' +
						'<img src=":img:" alt=":img alt:">'+
					'</div>' +
					'<div class="right">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
						
					'</div>' +
				'</article>';


	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function(shows, textStatus, jqxhr){
			console.log(shows);
			console.log(textStatus);
			var $tvShowsContainer = $('#app-body').find('.tv-shows');
			shows.forEach(function (show) {
				var article = template
					.replace(':name:', show.name)
					.replace(':img:', show.image.medium)
					.replace(':summary:', show.summary)
					.replace(':img alt:', show.name + 'Logo');
				console.log(article);
				$tvShowsContainer.append($(article));// es un JQuery object que ya fue evaluado el elemento
			});

		}
	});
});


