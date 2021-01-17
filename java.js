   

   
    // Function to roll the dice 
    function roll() { 
            var firstRandomNum = Math.floor(Math.random() * 6) + 1; 
            var secondRandomNum = Math.floor(Math.random() * 6) + 1; 
            document.querySelector(".pic1").setAttribute("src", 
                "dice" + firstRandomNum + ".png"); 
  
            document.querySelector(".pic2").setAttribute("src", 
                "dice" + secondRandomNum + ".png"); 

            if (firstRandomNum === secondRandomNum) { 
                document.querySelector("h1").innerHTML = "It's &nbsp;&nbsp;  a &nbsp;&nbsp; DRAW!"; 
            } 
            else if (firstRandomNum< secondRandomNum) { 
                document.querySelector("h1").innerHTML 
                                = "PLAYER&nbsp;&nbsp; 2 &nbsp;&nbsp; WINS"; 
            } 
            else { 
                document.querySelector("h1").innerHTML 
                                = "PLAYER&nbsp;&nbsp; 1 &nbsp;&nbsp; WINS"; 
            } 
			
        
    } 

