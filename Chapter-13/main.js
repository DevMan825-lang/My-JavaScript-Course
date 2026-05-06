// queySelectorAll 

// querySelectorAll() return the all elements that matches a CSS selector. 
// var x = document.querySelectorAll("p"); 
// console.log(x); 

// Selecting HTML elements with the index number.....
// var nodeList = document.querySelectorAll("p"); 
// console.log(nodeList[0]); 
// console.log(nodeList[1]); 
// console.log(nodeList[2]); 

// Changing HTML elements color with the nodeList and index number.....
// var nodeList = document.querySelectorAll("p"); 
// nodeList[0].style.backgroundColor = "red"; 
// nodeList[1].style.backgroundColor = "green"; 
// nodeList[2].style.backgroundColor = "blue"; 

// Using innerHTML in querySelectorAll.....
// var nodeList = document.querySelectorAll("span"); 
// nodeList[0].innerHTML = "Sapn Tag 1"; 
// nodeList[1].innerHTML = "Span Tag 2"; 
// nodeList[2].innerHTML = "Span Tag 3"; 


// Give the same property into the all HTML elements. 
// var nodeList = document.querySelectorAll("p"); 
// for(var i = 0; i < nodeList.length; i++){
//     nodeList[i].style.backgroundColor = "red";
//     nodeList[i].style.color = "yellow";
// }


// Selecting all the class names 
// var nodeList = document.querySelectorAll(".example"); 
// console.log(nodeList); 

// // Selecting all the id names 
// var nodeList = document.querySelectorAll("#example"); 
// console.log(nodeList); 

// Printing length of the elements // var nodeList = document.querySelectorAll("#example"); 
// console.log(nodeList.length); 


// Selecting all the child elemets using querySelectorAll(). 
// function change(){
//     var nodeList = document.querySelectorAll("div > p"); 
//     for(var i = 0; i < nodeList.length; i++){
//         console.log(nodeList[i]); 
//         nodeList[i].style.backgroundColor = "red"; 
//     }
// }




// Selecting all the HTML element attributes using querySelectorAll(). 
// var nodeList = document.querySelectorAll("img[src]"); 
// nodeList[0].style.width = "400px"; 
// nodeList[1].style.width = "400px"; 
// nodeList[2].style.width = "400px"; 





// Changing images using querySelectorAll()...... 
// var nodeList = document.querySelectorAll("img[src]"); 
// nodeList[0].src = "nature-image2.jpg"; 
// nodeList[1].src = "nature-image4.jpg"; 
// nodeList[2].src = "nature-image5.jpg"; 

