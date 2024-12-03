//35:30 https://www.youtube.com/watch?v=QTcIXok9wNY

import { SNAKE_SPEED, 
	update as updateSnake, 
	draw as drawSnake,
	getSnakeHead,
	snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'




let lastRenderTime = 0
let gameOver = false
const gameBoard  = document.getElementById('game-board')

const link = '/sss/app/game/snake'


function main(currentTime){
	if (gameOver){
		if (confirm('you lost. press ok to restart')){
			window.location = link
		}
		return
	}



	window.requestAnimationFrame(main)
	const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
	if (secondSinceLastRender < 1 / SNAKE_SPEED) return
	
	console.log('Render')
	lastRenderTime = currentTime

	update()
	draw()
}

window.requestAnimationFrame(main)


function update(){
	updateSnake()
	updateFood()
	checkDeath()
}

function draw(){
	gameBoard.innerHTML = ''
	drawSnake(gameBoard)
	drawFood(gameBoard)
}

function checkDeath(){
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

