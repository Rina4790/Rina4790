
// Get Lyric
const apiURL = 'https://api.lyrics.ovh';

let something = `${apiURL}/suggest/hello`;
const btn = document.querySelector('.btn');
const input = document.querySelector('.form-control');
const list = document.querySelector('.list-group');
const firstLi = document.querySelector('.list-group-item');
const lyricCard = document.querySelector('.card-text')
const lyricCardDiv = document.querySelector('#lyric')

btn.addEventListener('click', (e) => {
	e.preventDefault();
	let something = '';
	let string = input.value;
	list.innerHTML = '';
	list.classList.remove('none')
	something = `${apiURL}/suggest/${string}`
	getSong(something)
	input.value = ''
	lyricCard.innerHTML = ''
})

list.addEventListener('click', (event) => {
	if (event.target.tagName === 'LI') {
		let songTitle = event.target.dataset.title
		let artist = event.target.dataset.artist
		let lyric = `${apiURL}/v1/${artist}/${songTitle}`
		getLyric(lyric)
	}
})

async function getLyric(url) {
	try {
		let response = await fetch(url)
		let date = await response.json()
		date.lyrics = date.lyrics.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');
		lyricCard.innerHTML = date.lyrics
		lyricCardDiv.classList.remove('none')
		console.log(date.lyrics)
	} catch (error) {
		console.log(error);
		lyricCard.innerHTML = 'Текст песни не найден'
		lyricCardDiv.classList.remove('none')
	}
}

async function getSong(url) {
	let response = await fetch(url)
	let date = await response.json()
	let songs = date.data

	console.log(songs)
	songs.forEach((element) => {
		let songTitle = element.title
		let artist = element.artist.name
		let titles = `${artist} : "${songTitle}"`
		console.log(titles)
		const li = document.createElement('li');
		li.classList.add('list-group-item');
		li.dataset.title = songTitle
		li.dataset.artist = artist
		li.innerHTML = titles;
		list.append(li);
	})
}

