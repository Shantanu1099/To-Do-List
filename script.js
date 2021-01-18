var btn = document.getElementsByClassName("btn1")[0];
var input = document.querySelector("input");
var ul = document.querySelector("ul");

var checkAndAddTask = (event) => {
    if(input.value.length > 0 && event.keyCode === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";  
    }
};
var listNotEmpty = () => {
    if(input.value.length > 0){
        return true;
    }
};

var addTask = () => {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
};

btn.addEventListener('click', function(event) {
   if(listNotEmpty){
       addTask();
   } 
});
// console.log("Live Still Working");

// input.addEventListener('keypress', (event) => {
//     if(listNotEmpty() && event.which === 13){
//         addTask();
//     }
// });
input.addEventListener('keypress', checkAndAddTask)