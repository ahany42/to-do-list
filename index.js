var input = document.querySelector(".inputtext");
var addbtn = document.querySelector(".addbtn");
var taskcontainer = document.getElementById("tasks");
var deleteall = document.querySelector(".deleteall");
var taskarr = [];
// window.localStorage.clear();
if(window.localStorage.getItem("tasks")){
   taskarr = JSON.parse(window.localStorage.getItem("tasks"));
   addelements(taskarr);
}
else{

}
function addfn(){
  if(input.value !== "")
{ 
  tasktoarr(input.value);
  addelements(taskarr);

  input.value=" ";
} 
else{
  taskcontainer.removeChild(newdiv);
}
}
function tasktoarr(taskbody){
    const task = {
      id:Date.now(),
      body:taskbody,
    };
    if(task.body!==" ")
    taskarr.push(task);
    
    }
  function addelements(taskarr){
    taskcontainer.innerHTML=" ";
    taskarr.forEach((task)=>{
      if(task.body !==" "){
    const newdiv=document.createElement("div");
     taskcontainer.appendChild(newdiv);
     newdiv.innerText=task.body;
     taskcontainer.setAttribute("task-id",task.id);
     let deletebtn = document.createElement("span");
     deletebtn.className="del";
     deletebtn.innerHTML="delete";
     newdiv.appendChild(deletebtn);
     save(taskarr);
      }
    })

  
    
  }
  function save(taskarr){
      console.log(input.value);
      window.localStorage.setItem("tasks",JSON.stringify(taskarr));
     
    }

function deletallfn(){
  window.localStorage.clear();
  window.location.reload();
}
  addbtn.addEventListener("click",addfn);
  deleteall.addEventListener("click",deletallfn);
  
  




