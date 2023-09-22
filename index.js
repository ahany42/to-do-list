var input = document.querySelector(".inputtext");
var addbtn = document.querySelector(".addbtn");
var taskcontainer = document.getElementById("tasks");
var taskarr = [];

function addfn(){
  if(input.value !== "")
{ 
  tasktoarr(input.value);
  input.value=" ";
} 
else{

}
}
function tasktoarr(taskbody){
    // window.sessionStorage.setItem("input",input.value);
    // window.localStorage.task=input.value;
    // const newdiv=document.createElement("div");
    //  document.getElementById("tasks").appendChild(newdiv);
    //  newdiv.innerText=window.localStorage.task;
    const task = {
      id:Date.now(),
      body:taskbody,
    };
    taskarr.push(task);
    console.log(taskarr);
    }
  addbtn.addEventListener("click",addfn);




