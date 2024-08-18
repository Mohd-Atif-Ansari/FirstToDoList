

// var n = document.querySelector(".middle").innerHTML = "<h1>"+input +"</h1>";

// document.querySelector(".plus i").addEventListener("click",function () {
//     var inputText = prompt("Add your note");
//     document.querySelector(".middle").innerHTML = "<h1>"+inputText +"</h1>";
// })


// function Add(){
// alert("dwe;");
// }


var inputs = document.getElementById("inp");
var text = document.querySelector(".box .middle");
function Add(){
     if(inputs.value == ""){
        alert("Please Enter a Task");
     }
     else{
           var newEle = document.createElement("ul");
           newEle.innerHTML = `${inputs.value} 
           <i class="ri-delete-bin-5-fill"></i>`;//yeh unoredered list ke tags ke andar vale
           text.appendChild(newEle);
           inputs.value = "";
           newEle.querySelector("i").addEventListener("click",function(){
                  //text.removeChild(newEle);
                  newEle.remove();
           });
     }
}































// document.addEventListener("keypress", function(event) {

//     console.log(event.key);
//   });
  
//   switch (key) {
//     case "Enter":

//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     default: console.log(key);

//   }
