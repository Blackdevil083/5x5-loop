//console.log("hello world")

// class selector
const GRID = document.querySelector('.grid')

console.log(GRID)

//variables
var isMovingRight = true
var direction = 1

//creating grid in html
for(let i=0;i<27;i++)
{
    const SQUARE = document.createElement('div')
    GRID.appendChild(SQUARE)
}

//creating array from all squares
const SQUARES = Array.from(document.querySelectorAll('.grid div'))

console.log(SQUARES)


//character/player
var charIndex = 0

//draw() && erase()  function
function draw(){
    SQUARES[charIndex].classList.add('char')
}
function erase(){
    SQUARES[charIndex].classList.remove('char')
}

draw() // function call to draw char

//animation function
function animate(){
    //
    //
    erase()
    //
    //check and move  condition
    if (isMovingRight && direction){
        charIndex += 1 
    }
    //check for reset
    if (charIndex==25){
        reset()
    }
    //
    console.log(charIndex)
    //
    draw()
    
}

setInterval(animate, 500)

//reset function 
function reset(){
    charIndex=0
}