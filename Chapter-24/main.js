// JavaScript Sets : 
// Sets is a collection of unique values. 

// Each value can comes only one time in a set.

// In the set both primitive and objects can be occur. 

// For creating the sets use : new Set() method. 
//             or 
// Add values to the empty sets use : add() method. 

// Creating the Set 
// const letters = new Set(["a", "b", "c"]); 
// console.log(letters); // Printing the value of Set 
// console.log(letters.size);  // Printing the total size of the Set 

// const fruits = new Set(["Apple", "Mango", "Banana", "Orange"]); 
// console.log(fruits); 
// console.log(fruits.size); 

// Creating the Empty Set 
// const fruits = new Set(); 
// Adding values to the Empty Set : 
// fruits.add("Apple");
// fruits.add("Mango"); 
// fruits.add("Banana"); 
// fruits.add("Orange"); 
// console.log(fruits);  


// const letters = new Set(); 
// const a = letters.add("A"); 
// const b = letters.add("B"); 
// const c = letters.add("C"); 
// const d = letters.add("D"); 
// console.log(a); 
// console.log(b); 
// console.log(c); 
// console.log(d); 


// Storing the numbers in Set : 
// const num = new Set([1,2,3,4]); 
// console.log(num); 

// Using the For of loop in set to print the values : 
// const fruits = new Set(["Apple", "Mango", "Banana", "Orange"]); 
// let text = ""; 
// for(const i of fruits){
//     text += "\n" + i; 
// }
// console.log(text); 

// const letters = new Set(); 
// letters.add("a"); 
// letters.add("b");
// letters.add("c"); 
// letters.add("c"); 
// letters.add("d"); 
// letters.add("d"); 
// letters.add("d"); 
// letters.add("d"); 
// console.log(letters); 
// console.log(letters.size); 

// const fruits = ["Apple", "Apple", "Apple", "Apple"]; 
// console.log(fruits); 


// The Difference between the Set() and the Array[] is :
// Array[] prints duplicate values       
// But Set[] didn't print the duplicate values.

// const fruits = new Set(); 
// console.log(typeof fruits); 


// Set Methods : 
// 1. ForEach Method : 
// const fruits = new Set(); 
// fruits.add("Apple"); 
// fruits.add("Mango"); 
// fruits.add("Banana"); 
// fruits.add("Orange"); 
// let text = " "; 
// fruits.forEach(function(value){
//     text += value; 
//     console.log(value); 
// }); 

// 2. clear() : 
// const fruits = new Set(["Apple", "Mango", "Banana", "Orange"]); 
// console.log(fruits); 
// console.log(fruits.size); 
// fruits.clear(); 
// console.log(fruits); 

// 3. delete() : 
// const fruits = new Set(["Apple","Mango","Banana","Orange"]); 
// console.log(fruits.delete("Apple")); 
// console.log(fruits.delete("Mango")); 
// console.log(fruits); 

// 4. size() : 
// const fruits = new Set(["Apple", "Mango", "Banana", "Orange"]); 
// console.log(fruits.size); 

// 5. has() : 
// const letters = new Set(["A","B","C","D"]); 
// console.log(letters.has("B")); 
// console.log(letters.has("X")); 

// 6. keya() : 
// const letters = new Set(["A","B","C","D"]); 
// const myIterator = letters.keys(); 
// let text = " "; 
// for(const i of myIterator){
//     text += i; 
//     console.log(i); 
// }

// const letters = new Set(["A","B","C","D"]); 
// let text = " "; 
// for(const i of letters.keys()){
//     text += i; 
//     console.log(i); 
// }

// 7. values(); 
// const letters = new Set(["A","B","C","D"]); 
// let text = " "; 
// for(const i of letters.values()){
//     text += i; 
//     console.log(i); 
// }

// 8. entries(); 
const letters = new Set(["A","B","C","D"]); 
let text = " "; 
for(const i of letters.entries()){
    text += i; 
    console.log(i); 
}