const button01 = document.getElementById("button-color-01");
const button02 = document.getElementById("button-color-02");
const button03 = document.getElementById("button-color-03");

const container = document.getElementById("container");
const color01 = "#F769A6";
const color02 = "#F95B5B";
const color03 = "#FC8C4D";

const body = document.getElementsByTagName('body')[0]

body.style.backgroundColor= color01;
body.style.transition = "all 1s";

container.style.backgroundColor = color01;
container.style.transition = "all 1s";

button01.style.backgroundColor = color01;
button02.style.backgroundColor = color02;
button03.style.backgroundColor = color03;

button01.addEventListener('click',(e)=>{
    container.style.backgroundColor = color01;
    body.style.backgroundColor= color01;
})
button02.addEventListener('click',(e)=>{
    container.style.backgroundColor = color02;
    body.style.backgroundColor=  color02;
})
button03.addEventListener('click',(e)=>{
    container.style.backgroundColor = color03;
    body.style.backgroundColor= color03;
})