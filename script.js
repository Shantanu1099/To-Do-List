var btn = document.getElementsByClassName("btn1")[0];
var input = document.querySelector("input");
var ul = document.querySelector("ul");

btn.addEventListener('click', function() {
   if(input.value.length > 0){
       var li = document.createElement("li");
       li.appendChild(document.createTextNode(input.value));
       ul.appendChild(li);
       input.value = "";
   } 
});