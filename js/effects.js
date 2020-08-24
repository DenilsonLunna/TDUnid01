const button01 = document.getElementById("button-color-01");
const button02 = document.getElementById("button-color-02");
const button03 = document.getElementById("button-color-03");

const container = document.getElementById("container");

const color01 = "#8B7F78";
const color02 = "#676362";
const color03 = "#040404";

container.style.backgroundColor = color01;
container.style.transition = "all 1s";

button01.style.backgroundColor = color01;
button02.style.backgroundColor = color02;
button03.style.backgroundColor = color03;

button01.addEventListener('click',(e)=>{
    container.style.backgroundColor = color01;
})
button02.addEventListener('click',(e)=>{
    container.style.backgroundColor = color02;
})
button03.addEventListener('click',(e)=>{
    container.style.backgroundColor = color03;
})