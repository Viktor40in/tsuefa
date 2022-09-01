const start = document.querySelector('.start')

const ROCK = 'КАМЕНЬ';
const PAPER = 'БУМАГА'
const SCISSORS = 'НОЖНИЦЫ'
const DRAW = 'НИЧЬЯ'

function randomChoice() {
  const random = Math.random();

  if(random < 0.33) return ROCK

  if(random < 0.69) return PAPER

  if(random < 1) return SCISSORS

}

function playerChoice() {
  const choice = prompt(`Введи в поле один из трёх вариантов: ${ROCK}, ${PAPER} или ${SCISSORS}`).toUpperCase();
  if(![ROCK,PAPER,SCISSORS].includes(choice)) {
    let autoChoice = randomChoice()
    alert(`Не выбран ни один из предложенных вариантов! Автовыбор: ${autoChoice}`)
    return autoChoice
  }
  return choice
}

start.addEventListener('click', function() {
  const compChoice = randomChoice()
  const pChoice = playerChoice()
  if(compChoice === SCISSORS && )
})