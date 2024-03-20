import add from "./script1.js"
// import * as k from "./script1.js"
// import {sub , arr,x , name} from "./script1.js"
// console.log(add(5,6))
// console.log(sub(15,6))
// console.log(arr)
import * as a from "./script1.js"
const {sub , name} = a
console.log(sub(10,5))
let obj = new name()
obj.display("naman",20)