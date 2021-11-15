
let key = 'a67c348e50fc2db380ee36e1219db498';
const btn = document.querySelector('.btn');
const input = document.querySelector('.form-control');
const weatherCard = document.querySelector('.card')
  const img = document.createElement('img');
  img.classList.add('card-img-top');


btn.addEventListener('click', (e) => {
	e.preventDefault();
	let url = '';
	let city = input.value;
	// weatherCard.innerHTML = '';
	let lang = 'ru'
	url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=${lang}`;
	getWeather(url)
	// input.value = ''
	
})

const tempCard = document.querySelector('.temp_main')
const tempLikeCard = document.querySelector('.tempLike')
const windCard = document.querySelector('.wind')
const humidityCard = document.querySelector('.humidity')
const pressureCard = document.querySelector('.pressure')
const weatherImg = document.querySelector('.weather_img')
const descriptionCard = document.querySelector('.description')
const cityCard = document.querySelector('.city')
const detailsCard = document.querySelector('.details_title')
const title = document.querySelector('#blok')
console.log(title)


async function getWeather(url) {
	try {
		let response = await fetch(url)
		let data = await response.json()
		let city = data.name
		let country = data.sys.country
		cityCard.innerHTML = `<b>${city}, ${country}<b>`
		let temp = data.main.temp
		tempCard.innerHTML = `${temp} °C`
		let tempLike = data.main.feels_like
		tempLikeCard.innerHTML = `<b>Ощущается:<b> ${tempLike} °C`
		let descriptions = data.weather[0].description
		descriptionCard.innerHTML = descriptions
			// `Погодные условия: ${descriptions}`
		let humidity = data.main.humidity
		humidityCard.innerHTML = `<b>Влажность:<b> ${humidity} %`
		let wind = data.wind.speed
		windCard.innerHTML = `<b>Скорость ветра:<b> ${wind} м/с`
		let pressure = data.main.pressure
		pressureCard.innerHTML = `<b>Атмосферное давление:<b> ${pressure} гПа`
		detailsCard.innerHTML = `<b>Подробнее о погоде:<b>`
		detailsCard.style.borderBottom = '2px solid #7adddd';
		title.classList.remove('blok')
		
		
		
		console.log(data)
		console.log(descriptions)
		
		const icons = data.weather[0].icon;
		img.src = `http://openweathermap.org/img/w/${icons}.png`
		
		// weatherCard.innerHTML = `Температура: ${temp}, Ощущается: ${tempLike}, Погодные условия: ${description}`
		weatherImg.append(img);
	} catch (error) {
		console.log(error);
		// weatherCard.innerHTML = 'Город не найден'
	}
}

// async function getSong(url) {
// 	let response = await fetch(url)
// 	let date = await response.json()

// 	let songs = date.data

// 	console.log(songs)
// 	songs.forEach((element) => {
// 		let songTitle = element.title
// 		let artist = element.artist.name
// 		let titles = `${artist} : "${songTitle}"`
// 		console.log(titles)
// 		const li = document.createElement('li');
// 		li.classList.add('list-group-item');
// 		li.dataset.title = songTitle
// 		li.dataset.artist = artist
//   li.innerHTML = titles;
//   list.append(li);
// 	})
// }

// async function getWeater() {
//   let coords = await getUrl();
//   console.log(coords);
//   let response = await fetch(url);
//   let data = await response.json();

// async function getWeather() {
//   try {
//     let response = await fetch(url);

//     let data = await response.json();
//     let weather = await data.main.temp;
//     console.log(weather);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getWeather();

//   //   response.then((data) => data.json()).then((weather) => console.log(weather));
// }

// getWeater();

// function nav() {
//   return new Promise((res, rej) => {
//     console.log(res);
//     navigator.geolocation.getCurrentPosition(res);
//   });
// }

// async function getNav() {
//   let n = await nav();
//   console.log(n);
// }

// getNav();

// async/await

// fetch(url)
//   .then((response) => response.json())
//   .then((date) => console.log(date))
//   .catch((err) => console.log(err));

// async function getWeather() {
//   try {
//     let response = await fetch(url);

//     let data = await response.json();
//     let weather = await data.main.temp;
//     console.log(weather);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getWeather();

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   }
// }

// async function onSuccess(date) {
//   let { latitude, longitude } = date.coords;
//   //   let latitude = date.coords.latitude;
//   //   let longitude = date.coords.longitude;

//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

//   let response = await fetch(url);
//   let weatherDate = await response.json();
//   let temp = weatherDate.main.temp;
//   console.log(weatherDate);
//   //   fetch(url)
//   //     .then((response) => response.json())
//   //     .then((date) => console.log(date));
// }

// function onError(error) {
//   console.log(error.message);
// }

// let key = '3c6a6beaf3a5401c94c83e0c06bb69b5';

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   }
// }

// async function onSuccess(date) {
//   let { latitude, longitude } = date.coords;

//   let url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`;

//   let response = await fetch(url);

//   let locationDate = await response.json();

//   render(locationDate.results[0].components);
// }

// function onError(error) {
//   console.log(error.message);
// }

// function render(obj) {
//   const list = document.querySelector('.list-group');
//   list.innerHTML = '';
//   for (el in obj) {
//     const li = document.createElement('li');
//     li.classList.add('list-group-item');
//     li.innerHTML = `${el}: <b>${obj[el]}</b>`;
//     list.append(li);
//   }
// }

// getLocation();




// // Get wether
// const apiURL = 'https://api.lyrics.ovh';

// let something = `${apiURL}/suggest/hello`;
// const btn = document.querySelector('.btn');
// const input = document.querySelector('.form-control');
// const list = document.querySelector('.list-group');
// const firstLi = document.querySelector('.list-group-item');
// const lyricCard = document.querySelector('.card-text')
// // let lyric = `${apiURL}/v1/${artist}/${songTitle}`;

// btn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	let something = '';
// 	let string = input.value;
// 	list.innerHTML = '';
// 	something = `${apiURL}/suggest/${string}`
// 	getSong(something)
// 	input.value = ''
// 	lyricCard.innerHTML = ''
// })

// list.addEventListener('click', (event) => {
// 	if (event.target.tagName === 'LI') {
// 		let songTitle = event.target.dataset.title
// 		let artist = event.target.dataset.artist
// 		let lyric = `${apiURL}/v1/${artist}/${songTitle}`
// 		getLyric(lyric)
// 	}
// })

// async function getLyric(url) {
// 	try {
// 		let response = await fetch(url)
// 		let date = await response.json()
// 		date.lyrics = date.lyrics.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');
// 		lyricCard.innerHTML = date.lyrics
// 		console.log(date.lyrics)
// 	} catch (error) {
// 		console.log(error);
// 		lyricCard.innerHTML = 'Текст песни не найден'
// 	}
// }

// async function getSong(url) {
// 	let response = await fetch(url)
// 	let date = await response.json()

// 	let songs = date.data

// 	console.log(songs)
// 	songs.forEach((element) => {
// 		let songTitle = element.title
// 		let artist = element.artist.name
// 		let titles = `${artist} : "${songTitle}"`
// 		console.log(titles)
// 		const li = document.createElement('li');
// 		li.classList.add('list-group-item');
// 		li.dataset.title = songTitle
// 		li.dataset.artist = artist
//   li.innerHTML = titles;
//   list.append(li);
// 	})
// }

