require("@babel/polyfill")
import $ from "jquery" //内联loader的用法
import "./css/index.css"
class A{}

console.log($)
// console.log(window.$)

class B{}


function * gen(){
    let a=yield 1;
    let b=yield 2;
}

let g=gen()

console.log(g.next())
console.log(g.next())

console.log("nihao".includes("nihaofs"))