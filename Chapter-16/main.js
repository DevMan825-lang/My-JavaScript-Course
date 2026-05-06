// JavaScript getElement Methods
// 1. getElementById() : 
// document.getElementById("demo").innerHTML = "Hello World this is our JavaScript Course"; 
// document.getElementById("demo2").textContent = "Hello World this is our JavaScript Course"; 

// 2. getElementsByClassName() : 
// var elements = document.getElementsByClassName("demo"); 
// console.log(elements); 
// elements[0].innerHTML = "Hello World this is JavaScript"; 
// elements[1].innerHTML = "Hello World this is CSS"; 
// elements[2].innerHTML = "Hello World this is HTML"; 
// elements[0].style.backgroundColor = "red"; 
// elements[0].style.color = "#fff"; 


// 3. getElementsByTagName() : 
// var tag = document.getElementsByTagName("ul"); 
// var tag_2 = document.getElementsByTagName("li"); 
// console.log(tag); 
// tag[0].style.background = "red"; 
// tag[0].style.color = "#fff"; 
// tag[0].style.listStyleType = "none"; 
// tag[0].style.width = "100%"; 
// for(var i = 0; i < tag_2.length; i++){
//     tag_2[i].style.display = "inline-block"; 
//     tag_2[i].style.marginLeft = "20px";
//      tag_2[i].style.fontSize = "20px";
//      tag_2[i].style.fontFamily = "monospace";
// }


// var boxes = document.getElementsByTagName("div"); 
// console.log(boxes); 
// for(var i = 0; i < boxes.length; i++){
//     boxes[i].style.width = "100px"; 
//     boxes[i].style.height = "100px"; 
//     boxes[i].style.background = "#e11351";
//     boxes[i].style.marginBottom = "40px";
// }

// 4. getElementsByName() : 
// Using length property in getElementsByName() method 
// var name = document.getElementsByName("fname").length; 
// console.log("The length of the input name is : " + "" + name); 
