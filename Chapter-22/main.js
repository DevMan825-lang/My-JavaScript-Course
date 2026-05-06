// Array Methods 
// 1. length() : This method returns total length of a Array.
// const fruits = ["Apple","Mango","Banana","Orange","Grapes"]; 
// const length = fruits.length; 
// console.log(length); 

// If we print how many elements in the array then use this : 
// const fruits = ["Apple","Mango","Banana","Orange","Grapes"]; 
// const length = fruits.length - 1; 
// console.log(length); 

// Adding elements in the array 
// const fruits = ["Apple","Mango","Banana","Orange","Grapes"]; 
// fruits[fruits.length] = "Guava"; 
// console.log(fruits); 

// Printing length for 3 elements 
// const fruits = ["Apple","Mango","Banana","Orange","Grapes"]; 
// fruits.length = 2; 
// console.log(fruits); 

// Printing length for 4 elements 
// const fruits = ["Apple","Mango","Banana","Orange","Grapes"]; 
// fruits.length = 3; 
// console.log(fruits); 

// 2. toString() :  Returns array as a string, using cooma (,) seperator   
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes", "Guava"]; 
// const strArr = fruits.toString(); 
// console.log(strArr); 

// 3. join() : Returns array as a string, but choose a seperator() on your own.  
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Guava"]; 
// const strArr = fruits.join("*"); 
// console.log(strArr); 

// 4. at() : This method returns a array element based on their index number. 
// This method is introduced in JavaScript in ECMAScript 2022. 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const Arr = fruits.at(1); 
// console.log(Arr); 

// 5. pop() : This method removes last element from the array.  
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Guava"]; 
// console.log(fruits.pop()); 
// console.log(fruits); 

// 6. push() : This method add element in the last position in the array. 
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Guava"]; 
// console.log(fruits.push("Grapes"));
// console.log(fruits);  

// 7.shift() : This method removes first element from the array. 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(fruits.shift()); 
// console.log(fruits); 

// 8.unshift() : This method add element in the first position in the array.
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(fruits.unshift("Grapes")); 
// console.log(fruits); 

// 9. isArray() : This method cheks if it is array or not. If this is an 
// array return true. If not return false. 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const is_Array = Array.isArray(fruits); 
// console.log(is_Array); 

// 10. instanceof() : This method cheks if it is array or not. If this is an 
// array return true. If not return false. 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const is_Array = (fruits instanceof Array); 
// console.log(is_Array); 

// 11. delete() : This method deletes an element from the array. 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const del = delete fruits[0]; 
// console.log(fruits); 

// 12. concat() : This method joins two array. 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const vegetables = ["Potato", "Onion", "Brinjal", "Carrot"]; 
// console.log(fruits.concat(vegetables)); 

// 13. copyWithin() : Copy array elements under the array 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const copy = fruits.copyWithin(2, 0, 2); 
// console.log(copy); 

// 14. flat() : Convert multiple sub-arrays into one array. 
// const fruitsVeggies = [["Apple","Mango"],["Potato", "Onion"],["Banana","Orange"],["Brinjal", "Carrot"]]; 
// const one_Array = fruitsVeggies.flat(); 
// console.log(fruitsVeggies);  
// console.log(one_Array); 

// 15. slice() : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(fruits.slice(2)); 
// console.log(fruits.slice(1, 3)); 
// console.log(fruits.slice(0,2)); 

// 15. splice() : 

// The synatx of splice : 
// splice(positioned of an element in number, delete element in number, adding items)
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const ele = fruits.splice(0,1);
// console.log(ele); 
// console.log(fruits); 

// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const ele = fruits.splice(2, 0, "Guava","Grapes");
// console.log(ele); 
// console.log(fruits); 


// 15. toSpliced() : Add ECMAScript 2023.....  
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// const ele = fruits.toSpliced(1,1);
// console.log(ele); 
// console.log(fruits); 


// The diiference between slice() and toSpliced() is that 
// splice() method change our original array. 
// But the toSpliced() method don't change our original array. 
// It returns a new array.



// Array Search Methods  : 
// 1. indexOf() : Returns the index of an element  
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// console.log(fruits.indexOf("Mango")); 

// 2. lastIndexOf() : Returns the last index of an element  
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Apple"]; 
// console.log(fruits.lastIndexOf("Apple")); 

// 3. includes() : Returns the index of an element. If it is exist in our array.  
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Apple"]; 
// console.log(fruits.includes("Apple")); 

// 4. find() :   
// const num = [4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40];
// let firstEle = num.find(myFunction); 
// console.log(firstEle); 
// function myFunction(value, index, array){
//     return value > 18;  
// } 

// 5. findLast() :   
// const num = [4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40];
// let firstEle = num.findLast(myFunction); 
// console.log(firstEle); 
// function myFunction(value, index, array){
//     return value > 18;  
// } 

// 6. findIndex() :   
// const temperature = [4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40];
// let firstEle = temperature.findIndex(myFunction); 
// console.log(firstEle); 
// function myFunction(value, index, array){
//     return value > 18;  
// } 

// 6. findLastIndex() :   
// const temperature = [4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40];
// let firstEle = temperature.findLastIndex(myFunction); 
// console.log(firstEle); 
// function myFunction(value, index, array){
//     return value > 18;  
// } 


// Sort Methods : 
// 1. Alphabetic Sort, 2. Numeric Sort 
// Alphabetic Sort : 

// 1. sort() : sort() the array in asecending to descending order. 
// const fruits = ["Orange","Mango","Banana","Kiwi","Grapes","Apple","Avacado"]; 
// fruits.sort(); 
// console.log(fruits); 

// 2. reverse() : reverse() the array. 
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Kiwi"]; 
// fruits.reverse(); 
// console.log(fruits); 

// 3. toSorted() : This method add ECMAScript 2023. 
// const fruits = ["Orange","Mango","Banana","Kiwi","Grapes","Apple","Avacado"]; 
// const newSortArr = fruits.toSorted(); 
// console.log(newSortArr); 
// console.log(fruits); 

// The diiference between sort() and toSorted() is that 
// sort() method change our original array. 
// But the toSorted() method don't change our original array. 
// It returns a new array.

// 4. toReversed() : This method add ECMAScript 2023. 
// const fruits = ["Orange","Mango","Banana","Kiwi","Grapes","Apple","Avacado"]; 
// const newSortArr = fruits.toReversed(); 
// console.log(newSortArr); 
// console.log(fruits); 

// The diiference between reverse() and toReversed() is that 
// reverse() method change our original array. 
// But the toReversed() method don't change our original array. 
// It returns a new array.


// Sorting the array objects : 
// const cars = [
//     {carName : "BMW", model : "X5", year:1999}, 
//     {carName : "Honda", model : "Accord", year:2006},
//     {carName : "Ford", model : "Mustang", year:1969}
// ]; 
// cars.sort(function(a,b){
//     return a.year - b.year; 
// }); 
// cars.sort(function(a,b){
//     let x = a.model; 
//     let y = b.model; 
//     if(x < y) {
//         return -1;
//     }
//     if(x > y){
//         return 1; 
//     }
//     return 0; 
// });
// cars.sort(function(a,b){
//     let x = a.carName; 
//     let y = b.carName; 
//     if(x < y) {
//         return -1;
//     }
//     if(x > y){
//         return 1; 
//     }
//     return 0; 
// }); 
// displayCars(); 
// function displayCars(){
//     console.log(cars[0].carName + " " + cars[0].model + " " + cars[0].year);
//     console.log(cars[1].carName + " " + cars[1].model + " " + cars[1].year);
//     console.log(cars[2].carName + " " + cars[2].model + " " + cars[2].year);
// }


// const product = [
//     {product : "Laptop", price : 20000}, 
//     {product : "Mouse", price: 1000}, 
//     {product : "Desktop Set", price: 50000}, 
//     {product : "Speaker", price: 15000}, 
//     {product : "Printer", price:5000}, 
//     {product : "Keyboard", price:800},
//     {product : "Microsphone", price:800}
// ]; 
// function myFunction(){
//     product.sort(function(a,b){
//         return a.price - b.price;
//     });
//     displayProducts(); 
// }
// function displayProducts(){
//    document.getElementById("demo").innerHTML = product[0].product + " " + product[0].price + "<br>" + product[1].product + " " + product[1].price + "<br>"
//                                                + product[2].product + " " + product[2].price + "<br>" + product[3].product + " " + product[3].price + "<br>"
//                                                 + product[4].product + " " + product[4].price + "<br>" + product[5].product + " " + product[5].price + "<br>"; 
  
// }

// Array Iterations Method : 
// Loops in Array : 
// 1. For Loop. 
// 2. For of Loop. 
// 3. For in Loop. 
// 4. ForEach Method. 
// 5. Map Function. 


// For Loop : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]); 
// }


// For of Loop : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// for(i of fruits){
//     console.log(i); 
// }


// For in Loop : 
// const fruits = ["Apple", "Mango", "Banana", "Orange"]; 
// for(i in fruits){
//     console.log(i); 
// }


// ForEach Method 
// const fruits = ["Apple","Mango","Banana","Orange"]; 
// fruits.forEach(myFunction); 
// function myFunction(value, index, array){
//     console.log(`${value}` + " = " + `${index}`); 
// }

// const num = [2, 4, 6, 8, 10]; 
// num.forEach(myFunction); 
// function myFunction(value, index, array){
//     console.log(`${value}` * 2); 
// }

// const fruits = ["Apple","Mango","Banana","Orange"]; 
// fruits.forEach(myFunction); 
// function myFunction(currentEle){
//     console.log(`${currentEle}`); 
// }


// Map Function : 
// const fruits = ["Apple","Mango","Banana","Orange"]; 
// fruits.map(myFunction); 
// function myFunction(value, index, array){
//     console.log(`${value}` + " " + `${index}`); 
// }

// const fruits = ["Apple","Mango","Banana","Orange"]; 
// fruits.map(myFunction); 
// function myFunction(value){
//     console.log(`${value}`); 
// }

// const fruits = ["Apple","Mango","Banana","Orange"]; 
// fruits.map(myFunction); 
// function myFunction(currentEle){
//     console.log(`${currentEle}`); 
// }


// Filter Method : 
// const num = [45, 2, 4, 20, 50, 10, 8, 12, 35]; 
// const result = num.filter(myFunction); 
// console.log(result); 
// function myFunction(value){
//     return value > 40; 
// }


// 1. Add "December" in the last position of the array ? 
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]; 
// const addMonth = months.splice(months.length, 0, "December"); 
// console.log(months); 

// 2. Change the value "MAR" to "Mar"? 
// const months = ["Jan", "Feb", "MAR"]; 
// const changeMonth = months.splice(2,2,"Mar"); 
// console.log(months);
