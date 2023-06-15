var numSquares = 6;
var colors = [];
//var colors = generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    //mode buttons event listener
for(var i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[0].classList.remove("selected");
      this.classList.add("selected"); 

      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });    
}

for(var i=0;i<squares.length;i++){
    //add initial colors
   // squares[i].style.background=colors[i];
    //add click listener
    squares[i].addEventListener("click",function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color to picked color
    console.log(clickedColor,pickedColor);
    if(clickedColor === pickedColor){
       messageDisplay.textContent = "correct";
       resetButton.textContent = "Play Again";
       changeColors(clickedColor);
       h1.style.background = clickedColor;
    }else{
       this.style.background = "#232323";
       messageDisplay.textContent = "Try again";
    }
    
    });        
}
reset();
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent ="New Colors";
    messageDisplay.textContent = "";
    //change color of square
    for(var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    squares[i].style.background=colors[i];
    }    
    h1.style.background = "steelblue";
}

/*easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for( var i = 0; i<squares.length;i++){
       if(colors[i]){
        squares[i].style.background = colors[i];
       } else{
          squares[i].style.display = "none";
       }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for( var i = 0; i<squares.length;i++){
        squares[i].style.background = colors[i];
          squares[i].style.display = "block";
    }
});
*/

resetButton.addEventListener("click",function(){
    reset();
    //generate all new numbers
   /* colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent ="New Colors";

    messageDisplay.textContent = "";
    //change color of square
    for(var i=0; i<squares.length;i++){
    squares[i].style.background=colors[i];
    }    
    h1.style.background = "steelblue";*/
});


//colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
        //add initial colors
       // squares[i].style.background=colors[i];
        //add click listener
        squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to picked color
        console.log(clickedColor,pickedColor);
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "correct";
           resetButton.textContent = "Play Again";
           changeColors(clickedColor);
           h1.style.background = clickedColor;
        }else{
           this.style.background = "#232323";
           messageDisplay.textContent = "Try again";
        }
        
        });        
 }

 function changeColors(color){
    //loop throgh all squares
    for(var i=0;i<squares.length;i++){
    //change each color to match given color
    squares[i].style.background=color;
 }
 } 

 function pickColor(){
    //give random number
    var randomNumber = Math.floor(Math.random()*(colors.length));
    //return random number
    return colors[randomNumber];
 }

 function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i=0;i<num;i++){
    //add random number to array
    arr.push(randomColor());
    //get random color and push into arr

    } 
    //return that array
    return arr;
 }

 function randomColor(){
    //pick red from 0 to 255
    var r = Math.floor(Math.random()*255);
    //pick green from 0-255
    var g = Math.floor(Math.random()*255);
    //pick blue from 0-255
    var b = Math.floor(Math.random()*255);
    //return rgb color
    return "rgb("+ r +", "+ g + ", "+ b +")";
 }