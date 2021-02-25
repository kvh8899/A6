//var up = document.getElementById('geeks'); 
        //var down = document.getElementById('gfg');
//var select = document.getElementById("arr"); 
        //ar elmts = ["HTML", "CSS", "JS", "PHP", "jQuery"]; 
         
  var records = require("../records.json");

        // Main function 
        function forumRecord() { 
            console.log("hello");
           var select = document.getElementById("arr");
           var elmts = ["Good Sleep", "Swole Arms"];
           
        //var elmts = ["HTML", "CSS", "JS", "PHP", "jQuery"]; 
            for (var i = 0; i < elmts.length; i++) { 
                var optn = elmts[i]; 
                var el = document.createElement("option"); 
                el.textContent = optn; 
                el.value = optn; 
                select.appendChild(el); 
                console.log(i)
            } 
        }
            