let form = document.getElementById('form');
let button = document.getElementById('btn');
let remove = document.getElementById('remove');
let container = document.querySelector('#container');

button.addEventListener('click', function(e) {
	e.preventDefault();
	getGif(form.value);
});

remove.addEventListener('click', function() {
	container.querySelectorAll('*').forEach((n) => n.remove());
});

function getGif(searchTerm) {
	console.log('searchTerm is: ', searchTerm);
	$.ajax({
		url     : 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=ob4UP9lB1SlovtE8j3RYHQN6WfL7GD0w',
		type    : 'GET',
		success : function(response) {
			console.log(response);
			let max = response.data.length - 1;
			console.log('response.data.length is ', max);

			let randomNumber = Math.round(Math.random() * 50);
			let randomNumber1 = Math.round(Math.random() * 25);
			let randomNumber2 = Math.round(Math.random() * 10);

			let gifUrl = 'https://media.giphy.com/media/' + response.data[randomNumber].id + '/giphy.gif';
			let gifUrl1 = 'https://media.giphy.com/media/' + response.data[randomNumber1].id + '/giphy.gif';
			let gifUrl2 = 'https://media.giphy.com/media/' + response.data[randomNumber2].id + '/giphy.gif';
			console.log(gifUrl);
			let container = document.querySelector('#container');

			class Div {
				constructor(x) {
					this.makeDiv(x);
				}

				makeDiv(x) {
					let cell = document.createElement('DIV');
					cell.style.backgroundImage = `url(${x})`;
					cell.style.backgroundSize = 'cover';
					cell.style.backgroundRepeat = 'no-repeat';
					cell.style.backgroundPosition = 'center center';
					cell.style.display = 'inline-block';
					cell.style.position = 'relative';
					cell.style.overflow = 'hidden';
					cell.style.width = '300px';
					cell.style.height = '300px';
					cell.style.borderRadius = '6px 6px 6px 6px';
					cell.style.boxShadow = '0px 3px 5px 0px #000000';
					cell.style.marginRight = '100px';
					cell.style.marginBottom = '25px';
					cell.style.marginTop = '50px';
					cell.style.padding = '5px';
					console.log(typeof cell);

					container.appendChild(cell);
				}
			}
			new Div(gifUrl);
			new Div(gifUrl1);
			new Div(gifUrl2);
		}
	});
}

//***  CITATIONS:  ***//

//*******************************************************************************//
// title: AJAX request via Giphy API
// https://jsfiddle.net/ethanryan/yuLwuqag/
// Written by: Ethan Ryan
//*******************************************************************************//

//*****************************************************************************************************//
// title: Remove All children 👶 of the node in Javascript.
// https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
// Written by: Javascript Jeep
//******************************************************************************************************//
