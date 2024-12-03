import React from "react";

import './style.css'

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
   
   lastRenderTime = currentTime

   update()
   draw()
}

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

function runf(){
    
}
export default function Game_Snake(){
window.requestAnimationFrame(main)
  
	return(
		<>
			<div className="snake-game">
            <div id='game-board'>
              
            </div>
         </div>
		</>
	)
}