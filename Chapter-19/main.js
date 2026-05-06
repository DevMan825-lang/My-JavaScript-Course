// JavaScript Scope  : 
// 1. Global Scope. 
// 2. Function Scope. 
// 3. Block Scope 

// 1. Global Scope : When we write a variable outside a function. 
// then it was called Global Scope. 

// var x = 10; 
// let y = 20; 
// const z = 30; 
// function myFunction_1(){
//     console.log("X : " + x); 
// } 
// function myFunction_2(){
//     console.log("Y : " + y); 
// } 
// function myFunction_3(){
//     console.log("Z : " + z); 
// } 
// myFunction_1(); 
// myFunction_2(); 
// myFunction_3(); 


// var para = document.getElementById("demo"); 
// function myFunction(){
//     para.innerHTML = "This is JavaScript Global Scope"; 
// }

// Global Function : 
// myFunction(); 
// function myFunction(){
//     console.log("Global Function");
// }
// myFunction(); 
// function myFunction_1(){
//     myFunction(); 
// }
// myFunction_1(); 

// 2. Function Scope() ; Function Scope work only under function......

// function myFunction_1(){
//     var x = 10; 
//     console.log(x); 

// }
// function myFunction_2(){
//     let y = 20;
//     console.log(y); 
 
// }
// function myFunction_3(){
//     const z = 30; 
//     console.log(z); 

// }
// myFunction_1(); 
// myFunction_2(); 
// myFunction_3(); 

// Local Scope : 
// function myFunction_1(){
//     var x = 10; 
//     console.log(x); 
// }
// myFunction_1(); 

// Global Scope 
// var x = 10; 
// function myFunction_1(){
//     console.log(x); 
// }
// console.log(x); 
// myFunction_1(); 


// 3. Block Scope : 
// {
//     let x = 10; 
//     console.log(x); 
// }

// standalone Blocks : 
// {
//     let x = 10; 
//     let y = 10; 
//     let z = 10 * 10; 
//     console.log(z); 
// }

// JavaScript Hoisting : 
// Hoisting works with var keyword 
// x = 5; 
// console.log(x); 
// var x; 

// var x;
// x = 5; 
// console.log(x); 

// let x;
// x = 5; 
// console.log(x); 

// x = 5; 
// console.log(x); 
// const x; 

// const x;
// x = 5; 
// console.log(x); 

// var x = 5; 
// var y = 10; 
// console.log(x); 
// console.log(y); 

// var x = 5; 
// console.log(x); 
// console.log(y); 
// var y = 10; 

// var x = 5; 
// y = 10; 
// console.log(x); 
// console.log(y); 
// var y; 

 

