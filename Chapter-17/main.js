// var str = "Hello"; 
// var text = str.split('').reverse().join(''); 
// console.log(text); 

var text = "Hello"; 
var revtext = " "; 
for(var i = text.length - 1; i >= 0; i--){
    revtext += text[i]; 
}
console.log("Original Text : " + text); 
console.log("Reverse Text : " + revtext); 