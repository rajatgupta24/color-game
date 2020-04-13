let x = 6;
let colors = [];

function intColors(a){
    for ( let i = 0;i < a;i++)
    {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        colors[i] = `rgb(${r}, ${g}, ${b})`;
        console.log(colors[i]);
    }
}

intColors(x);

let colorDisplay = document.querySelector("#pickedColor");
let pickedColor = pickColor(x);

function pickColor(a){
    let r = Math.floor(Math.random() * a);
    return colors[r];
}

colorDisplay.textContent = pickedColor;

let squares = document.querySelectorAll(".square");
let clickedColor;
const result = document.querySelector("#result");

function correct(a){
    for (let i = 0;i < a;i++)
        squares[i].style.background = clickedColor;
    document.querySelector("header").style.backgroundColor = clickedColor;
}

function intSquares(a){
    for ( let i = 0; i < x;i++)
    {
        squares[i].style.background = colors[i];
        
        squares[i].addEventListener("click", function(){
            clickedColor = this.style.background;
            if (clickedColor === pickedColor){
                result.textContent = "CORRECT!";
                correct(x);
            }
            else{
                result.textContent = "Try Again!";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

intSquares();

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", reset)

function reset(){
    intColors(x);
    pickedColor = pickColor(x);
    colorDisplay.textContent = pickedColor;
    intSquares(x);
    document.querySelector("header").style.backgroundColor = "#232323";
    result.textContent = "";
    
}

let easyBtn = document.querySelector("#easy");

easyBtn.addEventListener("click", easy);
function easy() {
    x = 3;
    intColors(x);
    pickedColor = pickColor(x);
    colorDisplay.textContent = pickedColor;
    intSquares(x);
    document.querySelector("header").style.backgroundColor = "#232323";
    result.textContent = "";
    for (let i = 3;i < 6;i++)
    {
        squares[i].style.backgroundColor = "#232323"
    }
}

let hardBtn = document.querySelector("#hard");

hardBtn.addEventListener("click", hard);
function hard() {
    x = 6;
    intColors(x);
    pickedColor = pickColor(x);
    colorDisplay.textContent = pickedColor;
    intSquares(x);
    document.querySelector("header").style.backgroundColor = "#232323";
    result.textContent = "";
}

