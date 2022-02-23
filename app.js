const colorName = document.querySelector("#colorName");
const sheet = document.querySelector("main");
const button = document.querySelector("#btn");
sheet.style.backgroundColor = colorName.innerHTML;

const colors = ["orange","Maroon","Red","Navy","Silver","Teal","Aqua","lime","Olive","Green","Purple","CadetBlue","DarkGoldenRod"];

let len = colors.length;



function changeColor(){
    const randomIndex = Math.floor(Math.random()*len);
    colorName.textContent = colors[randomIndex];
    sheet.style.backgroundColor = colors[randomIndex];
}

button.addEventListener('click',changeColor);