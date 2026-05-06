// Loops : 
//There are 4 types of loops in JavaScript : 
// 1) While Loop. 
// 2) Do-While Loop 
// 3) For Loop 
// 4) For Each Loop 

// Synatx of the while loop : 
                // while(condition){
                    // Increment 
                    // Executable Program. 
            //}

            // Forwared Loop 
            // var num = 0; 
            // while(num < 100){
            //     num++; 
            //     console.log(num); 
            // }

            // Backward Loop 
            // var num = 100; 
            // while(num > 50){
            //     num--; 
            //     console.log(num); 
            // }

            // "Happy birthday to yo...!"
            // var i = 0; 
            // while(i < 1000){
            //     i++; 
            //     console.log("Happy birthday to you..!"); 
            // }



// Synatx of the do while loop : 
                //do{
                    // Increment 
                    // Executable Program. 
            //} while(condition)

             // Forwared Loop 
        //    var num = 0; 
        //    do{
        //         num++; 
        //         console.log(num); 
        //     } while(num < 100); 

        // Backward Loop 
        //    var num = 100; 
        //    do{
        //         num--; 
        //         console.log(num); 
        //     } while(num > 50); 

         // "Happy birthday to yo...!"
            // var i = 0; 
            // do{
            //     i++; 
            //     console.log("Hax ++ppy birthday to you..!"); 
            // }while(i < 1000); 


// Synatx of the for loop : 
              // For Loop is most used loop in programming world. 
              // Syntax :
            //   for(varName, condition, iternation){
            //     exceutable code
            //   }

            // Forward
            // for(var i = 1; i <= 10; i++){
            //     console.log(i); 
            // }

            // Backward 
            //    for(var i = 10; i >= 1; i--){
            //     console.log(i); 
            // }


            // "Happy birthday to yo...!"
            // for(var i = 10; i >= 1; i--){
            //     console.log("Happy birthday to yo...!"); 
            // }


// Synatx of the for each loop : 
              // For Each Loop is used in array. 
              // Syntax :
              // ArrayVariable.forEach(functionName); 
              // function functionName(items, index){
                        // executable code 
            //}

            // Used in Array 
            // var names = ["Amit", "Rohit", "Priya", "Vishal", "Ravi", "Mohan", "Vijay", "Girish", "Hari", "Ram"]; 
            // names.forEach(myFunction); 
            // function myFunction(names, index){
            //     console.log(index + " " + names); 
            // }

            // Using For Loop 
            // var names = ["Amit", "Rohit", "Priya", "Vishal", "Ravi", "Mohan", "Vijay", "Girish", "Hari", "Ram"]; 
            // // console.log(names[1]); 
            // for(var i = 0; i < 10; i++){
            //     console.log(names[i]); 
            // }

             // Using For Loop 
            // var names = ["Amit", "Rohit", "Priya", "Vishal", "Ravi", "Mohan", "Vijay", "Girish", "Hari", "Ram", "Amit", "Rohit", "Priya", "Vishal", "Ravi", "Mohan", "Vijay", "Girish", "Hari", "Ram", "Amit", "Rohit", "Priya", "Vishal", "Ravi", "Mohan", "Vijay", "Girish", "Hari", "Ram", "Amit", "Rohit", "Priya", "Vishal", "Ravi", "Mohan", "Vijay", "Girish", "Hari", "Ram", "Amit", "Rohit", "Priya", "Vishal", "Ravi", "Mohan", "Vijay", "Girish", "Hari", "Ram"]; 
            // // console.log(names[1]); 
            // for(var i = 0; i < names.length; i++){
            //     console.log(names[i]); 
            // }

// Print String value in loop 

            // var str = "Hello World"; 
            // for(var i = 0; i < 11; i++){
            //     console.log(str[i]); 
            // }


            
            // var str = "m,dsfkjkldsfldsfodofgksdajashnsdkfdkgflkgfkldhjsakdsldfjsal;sd;lcvmkkljsdfijdf[krgsdkd;kmndfk;mfgklmgh"; 
            // for(var i = 0; i < str.length; i++){
            //     console.log(str[i]); 
            // }


// Infinite Loop :  
            // for(var i = 0; i < 10; i--){
            //     console.log(i); 
            // }


// var readline = require("readline"); 
// var rl = readline.createInterface({
//     input:process.stdin, 
//     output:process.stdout
// }); 
// var number; 
// do{
// rl.question("Enter a positive number : ", function(number){ 
       
//             number++; 
//             console.log(number); 
      
// }); 
// }while(number > 0); 

// Break and Continue 
// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         break; 
//     }
//     console.log(i); 
// }

// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         continue; 
//     }
//     console.log(i); 
// }

// // Even Number 
// // Write a program to print the even numbers between 0 to 100 
// for(var i = 0; i <= 100; i += 2){
//             console.log(i); 
// }

// Odd Number 
// Write a program to print the odd numbers between 0 to 100 
// for(var i = 1; i <= 100; i += 2){
//             console.log(i); 
// }

