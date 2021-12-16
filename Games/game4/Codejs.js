let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')

let values=['😍' , '😃' , '😆' , '😂' , '😜' , '🤩', '🙃']
var interval;var int2;var int3;
//let values=['😂']
function getRandomVal(){
  return values[parseInt(Math.random()*values.length)]
}
let bt=document.getElementById('bt')
function click1(){
  value1.classList.add('value');

}
function click2(){
  value2.classList.add('value');

}
function click3(){
  value3.classList.add('value');

}
// function working(){
  
// }
//console.log('bt')

//console.log(click1,click2,click3)
function f(){
  value1.classList.remove('value');
clearInterval(interval)}


  function t(){
  value2.classList.remove('value');
clearInterval(int2);}


  function p(){
  value3.classList.remove('value');
clearInterval(int3);
if(value1.innerText == value2.innerText && value2.innerText == value3.innerText) {
  j();}
else {    k();
}
}
bt.onclick = function(){
  click1();
  setTimeout(click2,300);
  setTimeout(click3,700);
  interval = setInterval(()=>{
    value1.innerText=getRandomVal()},300)
   int2=setInterval(()=> {value2.innerText=getRandomVal()},300)
    int3 =setInterval(()=> {value3.innerText=getRandomVal()},300)


   setTimeout(f,4300);
  setTimeout(t,4900);
  setTimeout(p,5400);
  //dec();

}
  // value2.classList.add('value');
  // value3.classList.add('value');
let para=document.getElementById('para')

function j(){
  para.classList.add('val')
  para.innerText='player wins ! hurray!!🤩🤩 '
}
function k(){
  para.classList.add('val')
  para.innerText='oops!! try again!😔😔'
}
//console.log(j)
//Try Now.


  //clearInterval(interval);

 // console.log(value1.innerText, value2.innerText, value3.innerText);