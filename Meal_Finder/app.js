// getCurrencies();
const card = document.querySelector('#card')
const img = document.querySelector('.card-img-top');
const title = document.querySelector('.card-title');
const btn = document.querySelector('.random');
const text = document.querySelector('.card-text');
const link = document.querySelector('.link');
const input = document.querySelector('.form-control')
const search = document.querySelector('#button-addon2')
const searchArea = document.querySelector('.search_area')

btn.addEventListener('click', (event) => {
	searchArea.innerHTML = ''
	getRandoMmeal()
});

async function getRandoMmeal() {
  let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  let response = await fetch(url);
  let data = await response.json();
  renderCard(data.meals[0]);
}

function renderCard(dto) {
  card.classList.remove('none')
  img.src = dto.strMealThumb;
  title.innerHTML = dto.strMeal;
  text.innerHTML = dto.strInstructions;
  link.href = dto.strYoutube;
}

search.addEventListener('click', (event) => {
	searchArea.innerHTML = ''
	let letter = input.value
	getSearchMmeal(letter)
	input.value = ''
	card.classList.add('none')
})

searchArea.addEventListener('click', (event) => {
	if (event.target.tagName === 'IMG') {
		let selectedMeal = event.target.closest('div')
		let id = selectedMeal.dataset.idMeal
		getSearchMmealId(id)
		window.scrollTo(0,0);
	}
})


async function getSearchMmealId(id) {
	let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
	let response = await fetch(url);
	let data = await response.json();
	console.log(data.meals[0])
	renderCard(data.meals[0]);
}

async function getSearchMmeal(letter) {
	let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`;
	let response = await fetch(url);
	let data = await response.json();
	console.log(data);
	let meal = data.meals
	
	meal.forEach((element) => {
		let mealTitle = element.strMeal
		let mealImgSrc = element.strMealThumb
		let picture = document.createElement('div')
		picture.classList.add('col-sm')
		let pictureImg = document.createElement('img')
		pictureImg.classList.add('rounded')
		let pictureTitle = document.createElement('p')
		pictureTitle.classList.add('search_title')
		picture.append(pictureImg)
		picture.append(pictureTitle)
		searchArea.append(picture)
		picture.dataset.idMeal = element.idMeal
		pictureImg.src = mealImgSrc
		pictureTitle.innerHTML = mealTitle
	})
}

