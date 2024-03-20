let c = document.getElementById("p");
let count = 0;
let e = document.getElementById("even");
let even = "Even";
let odd = " Odd";
let p=document.getElementById('pc')
let cunt=0;
function incr() {
  if (count < 20)
   {
    count++;
    if (count % 2 == 0) {
      e.textContent = even;
      c.textContent = count;
    } else {
      e.textContent = odd;
      c.textContent = count;
    }
   
  }
  else{
    alert("Limit Reached cannot go above 20")
  }
}
function decr() {
  if (count > 0) {
    count--;

    if (count % 2 == 0) {
      e.textContent = even;
      c.textContent = count;
    } else {
      e.textContent = odd;
      c.textContent = count;
    }
  }
  else{
    alert("Limit Reached cannot go below 0")
  }
}
function reset() {
  count = 0;
  c.textContent = 0;
  e.textContent= "Even/Odd"
}
























// console.log(count)
// function even(){
//     if(count%2==0){

//     }
//     else{e.textContent=0}
// }

///////////////////////////////
// const showValue = document.querySelector('.value');
// const EvenOdd = document.querySelector('.even-odd');
// //    console.log(showValue.textContent);
// let even = "Even";
// let odd = "Odd";
// let counter = 0;

// function add(){
//     if(counter < 20){
//         counter++
//         if(counter%2==0){
//             showValue.textContent = counter;
//             EvenOdd.textContent = even;
//         }else{
//             showValue.textContent = counter;
//             EvenOdd.textContent = odd;
//         }
//     }
//     // counter++ ;
//     // showValue.textContent = counter;
//     // alert("hello")
// }

// function del(){
//     if(counter > 0){

//         counter--
//         if(counter%2==0){
//             showValue.textContent = counter;
//             EvenOdd.textContent = even;
//         }else{
//             showValue.textContent = counter;
//             EvenOdd.textContent = odd;
//         }

//     }
// }
// function reset(){
//     if(counter >= 0){
//         counter= 0;
//         showValue.textContent = counter;
//         EvenOdd.textContent = "EVEN / ODD";
//     }
// }
