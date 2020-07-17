console.log("Let's get this party started!");

const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const form = document.getElementById('search_form');
const input = document.getElementById('search');
const removeBtn = document.getElementById('remove');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	getGif(apiKey, input.value);
	input.value = '';
});

async function getGif(api_key, q) {
	const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { api_key, q } });
	const url = res.data.data[0].images.original.url;
	appendPage(url);
}

function appendPage(url) {
	const img = document.createElement('img');
	img.setAttribute('src', url);
	document.querySelector('#gifs').append(img);
}

removeBtn.addEventListener('click', function() {
	const imgs = document.querySelectorAll('img');
	for (let img of imgs) {
		img.remove();
	}
});
