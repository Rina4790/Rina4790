
function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

const selectPl = document.querySelector('.select-pl')
const selectCm = document.querySelector('.select-cm')

const row = document.querySelector('.card-my')
const win = document.querySelector('.win')

const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];


function winCheck(user, comp) {
	
		if ((user == 0 && comp == 1) || (user == 1 && comp == 2) || (user == 2 && comp == 0)) {
			winnerScores[0]++
			return 'Player побеждает!'
		} else if ((user == 0 && comp == 2) || (user == 1 && comp == 0) || (user == 2 && comp == 1)) {
			winnerScores[1]++
			return 'Computer побеждает!'
		} else {
			return 'Ничья'
		}
	}



row.addEventListener('click', (event) => {
	const values = ['Камень', 'Ножницы', 'Бумага']
	if (event.target.classList.contains('btn')) {
		let value = event.target.innerText
		const compSelect = values[randomInteger(0, 2)]
		selectPl.innerText = `Игрок выбрал ${value}`
		selectCm.innerText = `Комьютер выбрал ${compSelect}`
		win.innerHTML = ` ${winCheck(
			values.indexOf(value),
			values.indexOf(compSelect)
		)}`
		score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';
	}
})

