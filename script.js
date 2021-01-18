var btn = document.getElementsByClassName("btn1")[0];
var input = document.querySelector("input");
var ul = document.querySelector("ul");

btn.addEventListener('click', function(event) {
   if(input.value.length > 0){
       var li = document.createElement("li");
       li.appendChild(document.createTextNode(input.value));
       ul.appendChild(li);
       input.value = "";
   } 
});
// console.log("Live Still Working");

input.addEventListener('keypress', (event) => {
    if(input.value.length > 0 && event.which === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
});
