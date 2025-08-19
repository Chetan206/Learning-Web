// function DislayDate() {
//     document.getElementById("demoDate").innerHTML = Date();
// }

// function callChetan(id){
//     id.innerHTML = "Now Chetan Is Busy";
// }

// function upperCase(){
//    let x = document.getElementById("name");
//    x.value = x.value.toUpperCase();
// }

function signPage(){
   const x = new XMLHttpRequest();
   x.onload = function(){
      document.getElementById("#container").innerHTML = this.responseText;
   }
   x.open("GET", "index2.html");
   x.send();
} 