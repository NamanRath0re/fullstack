// // // var a=Number(prompt("enter a value"))
// // var a=20
// // // var b=Number(prompt("Enter b value"))
// // console.log(a.toFixed(2))
// // //toFixed works after decimals
// // console.log(a.toPrecision(3))
// // //toPrecision Works from starting
// // console.log(a.toString(2))
// // // toString works to calculate binary decimal or hexa decimals
// // console.log(Math.sqrt(a),Math.cbrt(a),Math.pow(a,3),Math.abs(-10),)

// // var b=4.5
// // console.log(Math.round(b),Math.floor(b),Math.ceil(b))

// // console.log(Math.round(Math.random()*10000))


// // function area(l,b)
// // {
// //     return l*b;
// // }
// // var res= area(10,20)
// // console.log(res)

// function printMsg() {
// 	//function declaration
// 	console.log("hello world") //function definition
// }
// function sum2 (a, b, fun)
// {
//     fun();
//     console.log(a + b)
//     return fun;
// }
// var z = sum2(5, 6, printMsg)
// console.log(z)


// // var x = function()// function expression
// // {
// //     console.log("hello world")
// // }
// // // console.log(x)
// // x()


// // function Outer ()
// // {
// //     // var x = 20
// //     function Inner ()
// //     {
// //             // var x = 20
// //           //scoping
// //         console.log("Inner function called",x)
// //     }
// //     Inner()
// //     console.log("outer function called",x)//x value is not defined error in output 
// // }
// // Outer()


// var AreaRect = function (l,b){
//     return l*b
// }
// console.log(AreaRect(10,20))


// var random = function (){
//     return Math.round(Math.random()*10000)
// }
// console.log(random())


// var arr=[0,1,2,3,4,5,6,7,8,9]
// arr.splice(0,1)
// console.log(arr)

// console.log(arr.copyWithin(3,1,6))


// // var str='johncena'
// // if(str.startsWith(a)||str.startsWith(e)||str.startsWith(i)||str.startsWith(o)||str.startsWith(u)){console.log("vowel")} else{console.log("consonent")}

// // var m = prompt(Number("enter a number"))
// // var n = prompt(Number("enter b number"))
// // var o = prompt(Number("enter c number"))
// // if((m>n)&&(m>o))
// // {
// //     console.log("m is greater")
// // }
// // else if((n>m)&&(n>o)){
// //     console.log("n is greate")
// // }
// // else
// // {
// //     console.log("o is greater")
// // }



// let num1 = Number(prompt("write a number"));    
// let num2 = Number(prompt("write a number"));    
// let num3 = Number(prompt("write a number"));    

// let largest;      

// if (num1 > num2 && num1 > num3) {
//     largest = num1;
// } else if (num2 > num1 && num2 > num3) {
//     largest = num2;
// } else {
//     largest = num3;
// }

// console.log("The largest number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + largest + ".");





// console.log("what is 10+20= " )
// console.log("a=10" )
// console.log("a=20" )
// console.log("a=30" )
// console.log("a=40" )
// let c=Number(prompt("enter a number"))
// switch(c)
// {

// }




// let i=2;
// while(i<=20)
// {
//     if(i%2==0){console.log(i)}
    
//     i++
// }

// let str="ebhi is educated"
// console.log(str.split(" "))
// let i=0
// while(i<3){
//     if((str.startsWith('a')) || (str.startsWith('a')) || (str.startsWith('a')) ||)
// }

let arr=[2,3,48,4,5,2,8,7,4,7,10]
let count=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0){
        console.log(arr[i])
        count++
    }
}
console.log("even nos count is "+ count)
console.log("odd nos count is" , arr.length-count )













