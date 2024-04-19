// var on=document.getElementById("on")
// var off=document.getElementById("off")
// var one=document.getElementById("one")
// var two=document.getElementById("two")
// var three=document.getElementById("three")
var fan=document.getElementById("dappa")

function stop(){

    fan.style.animation="thirupu 2.5s linear infinite";
    setTimeout(()=>{
        fan.style.animation="thirupu 0s linear infinite";
    },2500) 
}
function start()
{
    fan.style.animation="thirupu 0.8s linear infinite"; 
}
function speed1(){
    fan.style.animation="thirupu 0.6s linear infinite"; 
}
function speed2(){
    fan.style.animation="thirupu 0.4s linear infinite"; 
}
function speed3(){
    fan.style.animation="thirupu 0.2s linear infinite"; 
}