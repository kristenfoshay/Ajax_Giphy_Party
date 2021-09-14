let form = document.getElementById('form');
let button = document.getElementById('btn');
let remove = document.getElementById('remove')
let container = document.querySelector('#container');


button.addEventListener('click', function(e) {
	e.preventDefault();
	getGif(form.value);
});

remove.addEventListener('click', function(){
	container.querySelectorAll('*').forEach(n => n.remove());
	
})

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
			let div = document.createElement('div');
			div.style.backgroundImage = `url(${gifUrl})`;
			div.style.backgroundSize = 'cover';
			div.style.backgroundRepeat = 'no-repeat';
			div.style.backgroundPosition = 'center center';
			div.style.display = 'inline-block';
			div.style.position = 'relative';
			div.style.width = '300px';
			div.style.height = '300px';
			div.style.position = 'relative';
			div.style.overflow = 'hidden';
			div.style.borderRadius = '6px 6px 6px 6px';
			div.style.boxShadow = '0px 3px 5px 0px #000000';
			div.style.marginRight = '100px';
			div.style.marginBottom = '25px';
			div.style.marginTop = '50px';
			div.style.padding = '5px';
			let div1 = document.createElement('div');
			div1.style.backgroundImage = `url(${gifUrl1})`;
			div1.style.backgroundSize = 'cover';
			div1.style.backgroundRepeat = 'no-repeat';
			div1.style.backgroundPosition = 'center center';
			div1.style.display = 'inline-block';
			div1.style.position = 'relative';
			div1.style.width = '300px';
			div1.style.height = '300px';
			div1.style.position = 'relative';
			div1.style.overflow = 'hidden';
			div1.style.borderRadius = '6px 6px 6px 6px';
			div1.style.boxShadow = '0px 3px 5px 0px #000000';
			div1.style.marginRight = '100px';
			div1.style.marginBottom = '25px';
			div1.style.marginTop = '50px';
			div1.style.padding = '5px';
			let div2 = document.createElement('div');
			div2.style.backgroundImage = `url(${gifUrl2})`;
			div2.style.backgroundSize = 'cover';
			div2.style.backgroundRepeat = 'no-repeat';
			div2.style.backgroundPosition = 'center center';
			div2.style.display = 'inline-block';
			div2.style.position = 'relative';
			div2.style.width = '300px';
			div2.style.height = '300px';
			div2.style.position = 'relative';
			div2.style.overflow = 'hidden';
			div2.style.borderRadius = '6px 6px 6px 6px';
			div2.style.boxShadow = '0px 3px 5px 0px #000000';
			div2.style.marginRight = '100px';
			div2.style.marginBottom = '25px';
			div2.style.marginTop = '50px';
			div2.style.padding = '5px';
			let newDiv = container.appendChild(div);
			let newDiv1 = container.appendChild(div1);
			let newDiv2 = container.appendChild(div2);
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

