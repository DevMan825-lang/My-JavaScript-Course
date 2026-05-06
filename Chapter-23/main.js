// Functions : 
// Function is a resuable code blocks for particular program. 
// Function is executed when we call or invoked. 
// Function is used in all the programming languages. 

// To create a function used the function keyword : 
// Syntax : 
// function functionName(){
        // code block; 
// }

// function myFunction(){
//     return "Hello this is a function"; 
// }
// let x = myFunction(); 
// console.log(x); 

// function myFunction(){
//     console.log("Hello World this is our JavaScript Course"); 
// }
// myFunction(); // Function invoked or calling the function 


// function myFunction(){
//     console.log("Hello World this is our JavaScript Course"); 
// }
// myFunction(); 
// myFunction(); 
// myFunction(); 

// function myFunction(){
//     let x = 10; 
//     let y = 40; 
//     console.log("The sum of the x and y is : " + (x + y)); 
// }
// myFunction(); 

// myFunction(); 
// function myFunction(){
//     let x = 10; 
//     let y = 40; 
//     console.log("The sum of the x and y is : " + (x + y)); 
// }

    
    // function day_1(){
    //     console.log("Today is Monday"); 
    // }
    // function day_2(){
    //     console.log("Today is Tuesday"); 
    // }
    // function day_3(){
    //     console.log("Today is Wednesday"); 
    // }
    
    // var day_Input = 4; 
    
    // if(day_Input == 1){
    //     day_1(); 
    // }
    // else  if(day_Input == 2){
    //     day_2(); 
    // }
    //  else  if(day_Input == 3){
    //     day_3(); 
    // }
    // else{
    //     console.log("The day is invalid"); 
    // }
    


    // function day_1(){
    //     console.log("Today is Monday"); 
    // }
    // function day_2(){
    //     console.log("Today is Tuesday"); 
    // }
    // function day_3(){
    //     console.log("Today is Wednesday"); 
    // }
    
    // var day_Input = 1; 
    
    // switch(day_Input){
    //     case 1 : 
    //         day_1(); 
    //         break; 
    //     case 2 : 
    //         day_2(); 
    //         break; 
    //     case 3 : 
    //         day_3(); 
    //         break; 
    //     default:
    //         console.log("Invalid day"); 
    // }


    // Function Parameters : 
    // Parameters are also called values which is passed in the function. 

    // Syntax : 
    // function functionName(p1, p2, p3..........){
            // codeblocks
    // }
    // functionName(p1);
    
    // function myFunction(x, y){
    //     console.log("The value of the x is : " + x); 
    //     console.log("The value of the y is : " + y); 
    // }
    // myFunction(5, 10); 

    // Different types of multiple parameters 
    // function myFunction(name, age, address){
    //     console.log("Name : " + name); 
    //     console.log("Age : " + age); 
    //     console.log("Address : " + address); 
    // }
    // myFunction("Amit", 23, "Boko"); 

    // Calling the function multiple times 
    // and add multiple values to the parameter. 
    // function myFunction(name, age, address){
    //     console.log("Name : " + name); 
    //     console.log("Age : " + age); 
    //     console.log("Address : " + address); 
    // }
    // myFunction("Amit", 23, "Boko"); 
    // myFunction('Vishal', 20, "Boko"); 
    // myFunction("Priya", 21, "Boko"); 


    // function myFunction(a, b){
    //     return a + b; 
    // }
    // let num_1 = myFunction(5,5); 
    // let num_2 = myFunction(10,40); 
    // console.log("The sum of the a and the b is : " + num_1); 
    // console.log("The sum of the a and the b is : " + num_2);  


    // Replacing the parameter with different parameter in the function 
    // function myFunction(fname){
    //     console.log("The first name is : " + fname); 
    // }
    // let fname_1 = "Amit"; 
    // let fname_2 = "Vishal";
    // let fname_3 = "Priya";  
    // myFunction(fname_1);  
    // myFunction(fname_2);
    // myFunction(fname_3); 

    // Replacing parameters using return keyword
    // function myFunction(name){
    //     return name; 
    // }
    // let name = myFunction("Amit"); 
    // console.log(name); 

    // function myFunction(name){
    //     return name; 
    // }
    // let fname = "Amit";
    // let name = myFunction(fname); 
    // console.log(name); 

    // Replacing the parameters with user input. 
    // function myFunction(name,age){
    //     console.log("Name : " + name); 
    //     console.log("Age : " + age); 
    // }
    // let userName = prompt("Enter your name : "); 
    // let userAge = parseInt(prompt("Enter your Age : ")); 
    // myFunction(userName, userAge); 

    // Arrow Function 
    // var greet = () =>{
    //     console.log("Hello World this is JavaScript");
    // }
    // greet(); 

//     var greet = (name) =>{
//         console.log("Hello " + name);
//     }
//     greet("Amit"); 

// Return Statement : 
                // function myFunction(){
                //         return "Hello"; 
                // }
                // const myVar = myFunction(); 
                // console.log(myVar); 

                // function myFunction(a, b){
                //         return a + b; 
                // }
                // const myVar = myFunction(5,5); 
                // console.log(myVar); 

                //   function myFunction(){
                //         return 5 + 5; 
                // }
                // const myVar = myFunction(); 
                // console.log(myVar); 

// Arguments : 
                // function myFunction(a,b){
                //         return a * b;
                // }
                // const myVar = myFunction(5,5);  // Arguments
                // console.log(myVar); 

                //  function myFunction(a,b){
                //         return a + b;
                // }
                // const myVar = myFunction(10,5); // Arguments 
                // console.log(myVar); 

// Expressions : 
                // const myVar = function myFunction(a, b){
                //         return a + b;
                // }
                // const myVar_2 = myVar(5,5); 
                // console.log(myVar_2); 


        //         const myVar = function myFunction(a, b){
        //                 console.log("The sum of the a and b is  : " + (a + b));
        //         }
        //        myVar(5,5); 


        
        
//         let x = 5; 
//         let y = 5; 
//         function myFunction(a, b){
//                 return a + b; 
//         }
//        const myVar = myFunction(x,y); 
//        console.log(myVar); 



        // function myFunction(x, y){
        //         console.log("The value of x is : " + x); 
        //         console.log("The value of y is : " + y); 
        // }
        // document.getElementById("click").onclick = function(){
        //         var p1 = parseInt(prompt("Enter a number : ")); 
        //         var p2 = parseInt(prompt("Enter a number : ")); 
        //         myFunction(p1,p2); 
        // }