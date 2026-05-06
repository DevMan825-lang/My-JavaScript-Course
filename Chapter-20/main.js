// JavaScript Numbers 
// 1. JavaScript has only one type of number. 
//    Numbers can be written in JavaScript with decimal and 
//    without the decimal value. 

    //   let x = 3.14; // With decimal 
    //   let y = 3; // Withot decimal 
    //   console.log(x); 
    //   console.log(y); 

// 2. Extra large and small numbers can be written 
    // with scientific notation. 
    // let x = 123e5;
    // let y = 123e-5; 
    // console.log(x);
    // console.log(y);  

// 3. Many programming languages have many types of 
//    number such as whole number (integer): 
//    byte(8 bit), short(16 bit), int(32 bit), long(64 bit)
//    Real numbers (Floating point) : 
//    1. Float(32 bit), 2. Double(64 bit)

//    JavaScript numbers are always double 64 bit. 

// 4. Integer Precision : 
// Integers are accurate upto 15 digits
// const x = 999999999999999; 
// const y = 9999999999999999; 
// console.log(x);
// console.log(y);  

// 5. Floating Precision : 
// It is not 100% always accurate. 
// let x = 0.2 + 0.1; 
// console.log(x); 

// JavaScript Numeric Strings : 
// JavasCript numeric strings return values. 
// It will work in Subtraction(-), Multiplication(*) and Division(/). 
// But not work in Addition(+).

// let x = "100"; 
// let y = "10"; 
// let sub = x - y; 
// let multi = x * y; 
// let divi = x / y; 
// let add = x + y; 
// console.log("Subtraction(-) : " + sub);
// console.log("Multiplicaction(*) : " + multi);
// console.log("Division(/) : " + divi);
// console.log(add); 

// JavaScript NaN(Not a Number) : 
// // 1. The type of NaN is always Number.
// console.log(typeof NaN); 

// 2. The NaN returns If thye value is not a number. 
// let x = 100 / "Apple"; 
// console.log(x); 

// 3. However, if the value is a numeric string the NaN is not return 
// in the output. 
// let x = 100 / "10"; 
// console.log(x); 

// // 4. If we a calculate a numeric value with NaN then it will always 
// // return NaN
// let x = NaN; 
// let y = 5; 
// console.log(x + y); 

// 5. If we a add a numeric string value with NaN then it will always 
// return a join string
// let x = NaN; 
// let y = "5"; 
// console.log(x + y); 

// JavaScript Infinity 
// 1. Type of Infinity is always number 
// console.log(typeof Infinity);

// 2. Divide by Zero (0) ; 
// let x = 2 / 0; 
// let y = -2 / 0; 
// console.log(x);
// console.log(y); 

// 3. Largest value possible.
// let myNumber = 2; 
// while(myNumber != Infinity){
//     myNumber = myNumber * myNumber;
//     console.log(myNumber); 
// }

// JavaScript Numbers as object : 
// 1. To create JavaScript numbers as object you need to use new keyword.
// let num = new Number(123); 
// console.log(num); 
// console.log(typeof num); 


// 2. If you use equal to (==) then value will be equal ?
// let num_1 = new Number(500); 
// let num_2 = 500; 
// if(num_1 == num_2){
//     console.log('It is equal'); 
// }
// else{
//     console.log('Not equal'); 
// }

// 3. If you use equal to type (===) then value will be not equal ?
// let num_1 = new Number(500); 
// let num_2 = 500; 
// if(num_1 === num_2){
//     console.log('It is equal'); 
// }
// else{
//     console.log('Not equal'); 
// }


// JavaScript Number Methods : 
// Baisc Method : Work on any number. 
// 1. toString() : Returns the number as String. 
// let x = 123; 
// console.log(x.toString()); 

// 2. toExponential() : Return the number with scientific notation. 
// let x = 9.56; 
// console.log(x.toExponential()); 
// console.log(x.toExponential(2)); 
// console.log(x.toExponential(4)); 
// console.log(x.toExponential(8)); 

// // 3. toFixed() : Returns the number as string with the specified 
// // decimal places. 
// let x = 9.56; 
// console.log(x.toFixed()); 
// console.log(x.toFixed(2)); 
// console.log(x.toFixed(4)); 
// console.log(x.toFixed(8)); 

// 4. toPrecision() : Returns the number as string with the specified 
// length. 
// let x = 9.56; 
// console.log(x.toPrecision()); 
// console.log(x.toPrecision(2)); 
// console.log(x.toPrecision(4)); 
// console.log(x.toPrecision(8)); 

// 5. valueOf() : Returns a number as number 
// let x = 100; 
// console.log(x.valueOf()); 

// Static Method : It was only work on the number 
// 1. isFinite() : Return true if the number is Finite. 
// console.log(isFinite(123)); 
// console.log(isFinite(Infinity)); 
// console.log(Number.isFinite(312)); 

// 2. isInteger() : Return true if the value is integer. 
// let x = 123;
// let y = 3.14;
// console.log(Number.isInteger(x)); 
// console.log(Number.isInteger(y)); 

// 3. isNaN() : Return true if the value is not a number. 
// console.log(isNaN("Apple"));
// console.log(isNaN(123)); 

// // 4. parseInt() : Convert string to integer. 
// let x = parseInt("100"); 
// console.log(typeof x); 

// 5. parseFloat() : Convert string to Float. 
// let x = parseFloat("9.800"); 
// console.log(typeof x); 


// JavaScript HexaDecimal : 
// JavaScript interprets numeric constant as HexaDecimal if they preceded 
// by 0x
// let x = 0xFF; 
// console.log(x); 
