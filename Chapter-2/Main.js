// Variable writing Syntax in JS 
// There are 3 keywords to writing the variable in JavaScript 
// 1. var 
// 2. let 
// 3. const 

// Syntax : 
//     var variableName = value; 

// Variable : 
//         Variable is like a container or box where we can store our values. 
// Values : 
//         Values is a specified or a piece information where a program works on. 
//         Different types of values : Text, number, alphanumeric, Symbol... 

    // var x = 10; 
    // console.log(x); 

    // var x = 10.05; 
    // console.log(x); 

    // var x = "John"; 
    // console.log(x);
    
    // var x = 'John'; 
    // console.log(x);

    // var x; // Declarartion of the variable 
    // x = 10; 
    // console.log(x); 

    // Changing the variable values 
    // var x = 10; 
    // x = 20; 
    // console.log(x); 

    // Multiple Variables : 
    // var x = 10; 
    // var y = 20; 
    // var z = 30; 
    // console.log(x); 
    // console.log(y); 
    // console.log(z); 

    // var x = 10, y = 20, z = 30; 
    // console.log(x); 
    // console.log(y); 
    // console.log(z); 

    // var x, y, z; 
    // x = 10; 
    // y = 20; 
    // z = 30; 
    // console.log(x, y, z); 
    // console.log(x); 
    // console.log(y); 
    // console.log(z); 

    // var x = y = z = 50; 
    // console.log(x); 
    // console.log(y); 
    // console.log(z); 

    // var x = y = z = "Apple"; 
    // console.log(x); 
    // console.log(y); 
    // console.log(z); 

    // Calculation in Variable 
    // var x = 10; 
    // var y = 10; 
    // console.log(x + y); 


    // Case Sensitivity 
    // In case sensitivity we write the same variables but in 
    // the different format. 
    // Ex : x (This is small)
    //      X (This is capital)
    // var x = 10; 
    // var X = 50; 
    // console.log(x); 
    // console.log(X); 

    // var myVar = 50;  
    // var myvar = 100;
    // console.log(myVar); 
    // console.log(myvar);  

    // Different Types of Case in Variable. 
    // var myFirstName = "Amit"; // Camel Case 
    // var MySecondName = "Kumar"; // Pascal Case 
    // var my_last_name = "Deka"; // Snake Case 

    // console.log(myFirstName); 
    // console.log(MySecondName); 
    // console.log(my_last_name); 

    // Identifiers : 
    // 1. In JavaScript Variables are starting with letters, Underscore (_)
    // & Dollar Sign ($). 
    // 2. In JavaScript Variables are not starting with numbers. 
    // 3. Variables are case sensitive. 
    // 4. You can write variables with camel case. 
    // 5. Reserved keyword cannot be used as a variable (var, let, const, function, return, boolean). 

    // var myfirstname = "Amit"; 
    // var _mymiddle_name = "Kumar"; 
    // var $mylastname = "Deka"; 
    // var 123address = "Boko"; // Gives Error
    // var address123 = "Boko"; 
    // var myvar = 123; 
    // var myVar = 321; 
    // var myPinCode = 781123; 
    // var var = 100; 

    
    // var num1 = 20; 
    // var num2 = 20; 
    // console.log(num1 + num2); 

    // var num1 = 45; 
    // var num2 = 35; 
    // var result_1 = num1 + num2; 
    // console.log(result_1);  

    // Joining the variable values : 
    var myFirstName = "Gourav"; 
    var myLastName = "Talukdar"; 
    console.log(myFirstName + " " + myLastName); 
    console.log(myFirstName,myLastName); 
    console.log(`${myFirstName} ${myLastName}`); 