// Strings : 
// var str_1 = "John"; 
// var str_2 = 'Doe'; 
// var str_3 = "20"; 
// console.log(typeof str_1, str_2, str_3); 

// Escape Squence Characters : 
// \" \" = Double quotes 
// \' \' = Single quotes 
// \n = break line 
// \t = tab
// \b = backspace 
    // var str = "John \"Doe\" "; 

// Template Literals (`) :
// Template Strings 
// String Templates 

// var txt = `Hello Hi`; 
// console.log(txt); 

// var txt = `Hello Hi
// How are you?`; 
// console.log(txt); 

// var txt = `<h2>This is template literals in JavaScript</h2>`; 
// console.log(txt); 

// var txt = `This is 'template' literals in "JavaScript"`; 
// console.log(txt); 

// var txt = "John"; 
// var username = `<h1>${txt}</h1>`;
// console.log(txt); 

// var price_1 = 20; 
// var qty = 4; 
// console.log(`Total Price : ${(price_1 * qty)} `);



// Accessing the string characters using index values..........
// var myStr = "Hello World"; 
// H = 0;
// e = 1; 
// l = 2; 
// l = 3;
// o = 4; 
//   = 5; 
// console.log(myStr[10]); 

// var myStr = "Visit Microsoft!"; 
// var result = myStr.replace("Microsoft", "Google"); 
// console.log(result); 


// Methods of String : 
// 1. length() : 
// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
// var length = txt.length; 
// console.log(length); 

// 2. charAt(indexNum) : 
// var txt = "Hello World"; 
// var result = txt.charAt(1); 
// console.log(result); 

// 3. at(indexNum) : 
// var txt = "Hello World"; 
// var result = txt.at(2); 
// console.log(result); 

// 4. square bracket method([]) : 
// var txt = "Hello World"; 
// console.log(txt[8]); 

// 5. toUpperCase() : 
// var txt = "hello world"; 
// console.log(txt.toUpperCase()); 

// 6. toLowerCase() : 
// var txt = "HELLO WORLD"; 
// console.log(txt.toLowerCase()); 

// // 7. slice(start Index, end Index) : 
// var txt = "Hello World"; 
// console.log(txt.slice(1, 3)); 
// console.log(txt.slice(6, 11)); 
// console.log(txt.slice(-4)); 

// 8. subString(start Index, end Index) : 
// var txt = "Hello World"; 
// console.log(txt.substring(1, 3)); 
// console.log(txt.substring(6, 11)); 

// 9. Concat() : 
// var txt_1 = "Hello"; 
// var txt_2 = "World";
// var result = txt_1.concat(" ", txt_2);  
// console.log(result);

// 10. trim(), trimStart(), trimEnd() : 
        // var txt = "    Hello world           "; 
        // var result = txt.trim(); 
        // console.log(result); 

// 11. repeat(): 
        // var txt = "Hello World"; 
        // console.log(txt.repeat(4)); 
    
// 12. split() : 
    //    var txt = "Hello world"; 
    //    var result = txt.split(""); 
    //    console.log(result);  

    // 13. replace() : 
        // var txt = "Visit Microsoft!"; 
        // var result = txt.replace("Microsoft", "Google"); 
        // console.log(result); 

// 14. replaceAll() : 
        // var txt = "I love cats. Cats are best animals. Cats are easy to handle"; 
        // txt = txt.replaceAll("cats", "dogs"); 
        // txt = txt.replaceAll("Cats", "Dogs"); 
        // console.log(txt); 

// 15. charCodeAt() : 
        // var txt_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
        // var txt_2 = "abcdefghijklmnopqrstuvwxyz"; 

        // console.log(" --- ASCII Values ---"); 
        // for(var i = 0; i< txt_1.length; i++){
        //     console.log(txt_1[i] + " = " + txt_1.charCodeAt(i)); 
        // }

        //  for(var i = 0; i< txt_2.length; i++){
        //     console.log(txt_2[i] + " = " + txt_2.charCodeAt(i)); 
        // }
        
// Not Working
// Creating an empty string then put the values in the string using 
// index numbers.................

// var myStr; 
// myStr[0] = "H"; 
// myStr[1] = "e"; 
// myStr[2] = "l"; 
// myStr[3] = "l"; 
// myStr[4] = "o"; 
// myStr[5] = " "; 
// myStr[6] = "W"; 
// myStr[7] = "o"; 
// myStr[8] = "r"; 
// myStr[9] = "l"; 
// myStr[10] = "d"; 
// console.log(myStr); 


