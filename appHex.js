const colorName = document.querySelector("#colorName");
const sheet = document.querySelector("main");
const button = document.querySelector("#btn");
sheet.style.backgroundColor = colorName.innerHTML;

const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

function randomIndex(){
    return Math.floor(Math.random()*16);
}

function changeColor(){
    let hexCode = "#";
    for(let i=0;i<6;i++){
        hexCode += hex[randomIndex()];
    }
    colorName.textContent = hexCode;
    sheet.style.backgroundColor = hexCode;
}

button.addEventListener('click',changeColor);