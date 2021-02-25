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
                var option = elmts[i]; 
                var x = document.createElement("option"); 
                x.textContent = option; 
                x.value = option; 
                select.appendChild(x); 
                console.log(i)
            } 
        }

function deletePost(){
    //document.getElementById("post").style.visibility = 'hidden';
    alert("Delete and edit coming soon!")
    //x.style.display = "none";
    //var y = document.getElementById("delete");
    //y.style.display = "none";
}