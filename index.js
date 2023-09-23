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
      color:"black",
      check:false,
      textdecoration:"none",
      backgroundcolor:"white",
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
     newdiv.className="taskbody";
     newdiv.innerText=task.body;
     let checkbox = document.createElement("span");
     checkbox.className="checkbox";
     checkbox.innerHTML="<i class='fa-solid fa-square-check'></i>"
     newdiv.appendChild(checkbox);
     checkbox.addEventListener("click",(e)=>{
      if(task.check==true){
        task.color="#395144";
        task.textdecoration="line-through";
        task.check=false;
        task.backgroundcolor="#D3D3D3";
        newdiv.style.backgroundColor=task.backgroundcolor;
        checkbox.style.color=task.color;
        newdiv.style.textDecoration=task.textdecoration;
      }
      else{
        task.color="black";
        task.textdecoration="none";
        task.check=true;
        task.backgroundcolor="white";
        newdiv.style.backgroundColor=task.backgroundcolor;
        checkbox.style.color=task.color;
        newdiv.style.textDecoration=task.textdecoration;
      }
     
     save(taskarr);
  
    
     })
     checkbox.style.color=task.color;
     newdiv.style.textDecoration=task.textdecoration;
     newdiv.style.backgroundColor=task.backgroundcolor;
     taskcontainer.setAttribute("task-id",task.id);
     let deletebtn = document.createElement("span");
     deletebtn.className="del";
     deletebtn.innerHTML="<i class='fa-solid fa-trash-can' id='bin'></i>";
     deletebtn.addEventListener("click",(e)=>{
      e.target.parentElement.parentElement.remove();
      removefromlocal(task.id);
    
     })

     newdiv.appendChild(deletebtn);
     save(taskarr);
    
   
      }
    })

  
    
  }
  
  function save(taskarr){
      window.localStorage.setItem("tasks",JSON.stringify(taskarr));
      console.log(taskarr.length);
    }

function deletallfn(){
  window.localStorage.clear();
  window.location.reload();
}
  addbtn.addEventListener("click",addfn);
  deleteall.addEventListener("click",deletallfn);
  
  function removefromlocal(taskid){
   taskarr=taskarr.filter((task)=> task.id != taskid);
   save(taskarr);
   
  }

