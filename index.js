var input = document.querySelector(".inputtext");
var addbtn = document.querySelector(".addbtn");
// var delete = document.querySelectorAll(".");
function addfn(){
    window.sessionStorage.setItem("input",input.value);
    window.localStorage.task=input.value;
    const newdiv=document.createElement("div");
     document.getElementById("tasks").appendChild(newdiv);
     newdiv.innerText=window.localStorage.task;
    }

  addbtn.addEventListener("click",addfn);




// delete.addEventListener("click",(e)=>{
//     window.localStorage.clear();
// })