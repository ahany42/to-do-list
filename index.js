var input = document.querySelector(".inputtext");
var addbtn = document.querySelector(".addbtn");
var taskcontainer = document.getElementById("tasks");
var taskarr = [];
// window.localStorage.clear();
if(window.localStorage.getItem("tasks")){
   taskarr = JSON.parse(window.localStorage.getItem("tasks"));
   addelements(taskarr);
}

function addfn(){
  if(input.value !== "")
{ 
  tasktoarr(input.value);
  addelements(taskarr);

  input.value=" ";
} 
else{

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
     document.getElementById("tasks").appendChild(newdiv);
     newdiv.innerText=task.body;
     taskcontainer.setAttribute("task-id",task.id);
     let deletebtn = document.createElement("p");
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

  addbtn.addEventListener("click",addfn);





