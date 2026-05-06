// Browser User Input 
// var x = prompt("Enter your name"); 
// console.log(x); 


// Terminal User Input 
// var redline = require("readline"); 
// var rl = redline.createInterface({
//     input:process.stdin, 
//     output:process.stdout
// }); 
// rl.question("Enter your name : ", function(name){
//         console.log("Hello   " + name + " ! "); 
//         rl.close(); 
// }); 

// var redline = require("readline");
// var rel = redline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rel.question("Enter your name :", function(name){
//     console.log("Hello " +name +" ! ");
//     rel.close();
// });

// var rel_1 = readline.createInterface({
//         input:process.stdin, 
//         output:process.stdout 
// }); 
// rel_1.question("Enter your name : ", function(name){
//     rel_1.question("Enter your age : ", function(age){
//             rel_1.question("Enter your address : ", function(address){

//             console.log("Name : " + name); 
//             console.log("Age : " + age); 
//             console.log("Address : " + address);
//              rel_1.close(); 
//             }); 
//     }); 
// }); readline = require("readline"); 
// var 

var readline = require("readline");
var rel = readline.createInterface({
        input:process.stdin,
        output:process.stdout
});
rel.question("Enter your Name : ", function(name){
        rel.question("Enter your Age : ", function(age){
                rel.question("Enter your Address : ", function(address){
                        console.log("Name : "+ name);
                        console.log("Age :"+ age);
                        console.log("Address :"+ address);
                        rel.close();
                 });
        });
});


