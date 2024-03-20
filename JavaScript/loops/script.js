// let str2="this is javascript"
// let str= str2.split(' ').join('')
// console.log(str)

// let count=0;
// for(let i=0;i<str.length;i++)
// {
//     if( (str[i]=='a') || (str[i]=='e') || 
//     (str[i]=='i') || (str[i]=='o') || (str[i]=='u'))
//     {
//     count++;
//     }
// }
// console.log("no of vowels are" ,count);
// console.log("no of consonents are", str.length-count);












// let a = Number(prompt("enter a number"));
// let c = 0;
// if (a < 1) {
//   console.log(a, "is neither prime nor composite");
// } else {
//   for (let i = 2; i <= a; i++) {
//     if (a % i == 0) {
//       c = c + 1;
//     }
//   }
// }
// if (c == 1) {
//   console.log(`${a} is a prime number`);
// } else {
//   console.log(`${a} is a composite number`);
// }


function init() {
    const name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  

let i=0
while(i<=20){
    if(i%2==0)
    {
        console.log(i)
    }
}


console.log(document.getElementsByTagName('h3')[0].textContent)
console.log(document.getElementsByClassName('h1')[0].textContent)
console.log(document.getElementById('h2').textContent)



