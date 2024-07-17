window.addEventListener('load',bindEvent);
let plus;
let minus;
let reset;
let output;
let count = 0;
function bindEvent(){
    plus=document.querySelector('#btn-plus').addEventListener("click",plusCount);
    minus=document.querySelector('#btn-minus').addEventListener("click",minusCount);
    reset=document.getElementById('btn-reset').addEventListener("click",resetCount);
    output=document.getElementById('output');
    printOutput();
}
function printOutput(){
    output.innerText = count;
}
function plusCount(){
    count+=1;
    printOutput();
}
function minusCount(){
    if(count<=0) return;
    count-=1;
    printOutput();
}
function resetCount(){
    count=0;
    printOutput();
}
