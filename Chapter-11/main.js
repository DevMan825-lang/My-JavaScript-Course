// document.getElementById("heading").innerHTML = "Hello this is JavaScript Course"; 
// document.getElementById("heading").style.backgroundColor = "red"; 
// document.getElementById("heading").style.color = "yellow"; 

// document.getElementById("paragraph").textContent = "JavaScript is widley used programming language in web development. We use JavaScript to create websites, web apps, software, aplication, android apps and many more things"; 
// document.getElementById("paragraph").style.textAlign = "center";


// How to create HTML Elements Using JavaScript : 
// 1st method using document.write(); 
        // document.write("<h2>Hello World</h2>"); 

// 2nd method using innerHTML 
        // var container = document.getElementById("container"); 
        // container.innerHTML = "<p>JavaScript is widley used programming language in web development. We use JavaScript to create websites, web apps, software, aplication, android apps and many more thing</p>";

// 3rd method using template literals (`)
        // var username = "John"; 
        // var profile = `
        //     <div class="container" style="width:250px; height: 210px; background-color: hsl(0,0%,94%); display:flex; flex-direction:column; align-items:center; justify-content:center;">
        //     <h2>Username : ${username}</h2>
        //     <img src="nature-image2.jpg" style="width:50px; height:50px; border-radius:50%; border:2px solid #000;"/>
        //     <p>P Lorem ipsum dolor sit amet.</p>
        //     <button onclick="alert('Welcome to the profile of John')" style="background-color:white;">About</button>
        // `; 

        // document.body.innerHTML = profile; 

// 4th method using createElement (TagName) :  
        // var paragraph = document.createElement("p"); 
        // paragraph.textContent = "Hello this is JavaScript course"; 
        // paragraph.style.backgroundColor = "pink"; 
        // document.body.appendChild(paragraph); 

