// JavaScript Arrays : 
// Arrays are special type of object where we can add multiple 
// values. Which are called elements. Array elements are stored 
// as an index numebr the first index was called index[0] the index 
// is called index[1] and so on......
// Arrays are dynamic means it can grow and shrink. 
// Arrays are hetrogenous means we can store String, numbers and object 
// in our array. 

// In Array we got the mainly two things :
// 1) Elements, 2) index. 

// const models = ["Ford", "BMW", "Honda"]; 
// There are 3 elements into this array 

// const data = ["John", "Doe", 46]; 
// We can store both string and numbers in our array 

// We use array because of we can store multiple values under one variable..... 
// const person_1 = "Amit"; 
// const person_2 = "John"; 
// const person_3 = "Priya"; 

// const person = ["Amit", "John", "Priya", "Vishal", "Manish", "Vinod", "Mukesh", "Babita", "Ravi", "Viren"]; 
// console.log(person); 

// Empty Array : 
// const fruits = []; 
// fruits[0] = "Grapes"; 
// fruits[1] = "Apple"; 
// fruits[2] = "Mango"; 
// fruits[3] = "Banana"; 
// fruits[4] = "Orange"; 
// console.log(fruits);

// We can create arrays using the new keyword : 
// const fruits = new Array("Apple", "Mango", "Banana", "Orange"); 
// console.log(fruits); 

// Accesing the array elements : 
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Guava", "Kiwi", "Watermalon", "Dragon Fruit"]; 
// console.log(fruits[0]); 
// console.log(fruits[1]); 
// console.log(fruits[2]); 
// console.log(fruits[3]); 
// console.log(fruits[4]); 
// console.log(fruits[5]); 
// console.log(fruits[6]); 


// Changing the array elements : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// fruits[0] = "Grapes"; 
// console.log(fruits); 


// Convert Array to String : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const myStr = fruits.toString(); 
// console.log(fruits); 
// console.log(myStr); 

// How to use loop in Array : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// for(let i = 0; i < fruits.length; i++){
//     console.log("Fruits : " + fruits[i]); 
// }

// fruits.forEach(myFunction); 
// function myFunction(item, index){
//     console.log(item + " " + index); 
// }

// How to use length method in JavaScript Array : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(fruits.length); // Length of total items
// console.log(fruits.length - 1); // Length of total index 


// const cars = ["Mustang", "X5", "Accord"]; 
// document.getElementById("demo").innerHTML = cars; 

// How to add Elemet in the last place of the array : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(fruits.push("Grapes")); 
// console.log(fruits); 

// Adding elements using the length method of the array : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// fruits[fruits.length] = "Grapes"; 
// console.log(fruits); 

// Printing the array values randomly : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(fruits[Math.floor(Math.random() * fruits.length)]); 

// Array Undefined holes : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits[10]);  
// for(let i = 0; i < 10; i++){
//     console.log(fruits[i]); 
// }


// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// let text = "<ul>"; 
// for(let i = 0; i < fruits.length; i++){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>"; 
// document.getElementById("demo").innerHTML = "--- Fruits List --- \n" + text; 

// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// let text = "<ul>"; 
// fruits.forEach(myFunction);
// function myFunction(items){
//     text += "<li>" + items + "</li>";
// }
// text += "</ul>"; 
// document.getElementById("demo").innerHTML = "--- Fruits List --- \n" + text; 


// Check an array : 
// Type 1 :
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(typeof fruits); 

// Type 2 : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const typeArr = Array.isArray(fruits); 
// console.log(typeArr); 

// Type 3 : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const typeArr = (fruits instanceof Array); 
// console.log(typeArr); 


// function myFunction(){
//     let img = new Array("beautiful nature images/nature-image1.jpg",
//                         "beautiful nature images/nature-image2.jpg",
//                         "beautiful nature images/nature-image3.jpg",
//                         "beautiful nature images/nature-image4.jpg",
//                         "beautiful nature images/nature-image5.jpg",
//                         "beautiful nature images/nature-image6.jpg",
//                         "beautiful nature images/nature-image7.jpg"
//     ); 

//     let randomIndex = img[Math.floor(Math.random() * img.length)]; 
//     console.log(randomIndex); 
//     document.getElementById("img-container").src = randomIndex; 
//     document.getElementById("demo").innerHTML = randomIndex; 
// }




// function myFunction(){
//     let img = new Array("beautiful nature images/nature-image1.jpg",
//                         "beautiful nature images/nature-image2.jpg",
//                         "beautiful nature images/nature-image3.jpg",
//                         "beautiful nature images/nature-image4.jpg",
//                         "beautiful nature images/nature-image5.jpg",
//                         "beautiful nature images/nature-image6.jpg",
//                         "beautiful nature images/nature-image7.jpg"
//     ); 

//     let randomIndex = img[Math.floor(Math.random() * img.length)]; 
//     console.log(randomIndex); 
//     document.getElementById("img-container").src = randomIndex; 
//     document.getElementById("demo").innerHTML = randomIndex; 
// }

