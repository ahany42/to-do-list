var input = document.querySelector(".inputtext");
var addbtn = document.querySelector(".addbtn");
var taskcontainer = document.getElementById("tasks");
var deleteall = document.querySelector(".deleteall");
var taskarr = [];
var totaltasks = document.querySelector(".totaltasks");
var checknumdiv = document.querySelector(".checknumber");
var checktodonumdiv = document.querySelector(".todotasks");
totaltasks.innerHTML="Total Tasks: " + taskarr.length;
var checknum=0;
var total=0;


checkcount(taskarr);

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
    window.location.reload();

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
    totaltasks.innerHTML="Total Tasks: " + taskarr.length;
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
     
      if(task.check==false){
        task.color="#395144";
        task.textdecoration="line-through";
        task.check=true;
        task.backgroundcolor="#D3D3D3";
        newdiv.style.backgroundColor=task.backgroundcolor;
        checkbox.style.color=task.color;
        newdiv.style.textDecoration=task.textdecoration;
        save(taskarr);
        window.location.reload();
    }
      else{
        task.color="black";
        task.textdecoration="none";
        task.check=false;
        task.backgroundcolor="white";
        newdiv.style.backgroundColor=task.backgroundcolor;
        checkbox.style.color=task.color;
        newdiv.style.textDecoration=task.textdecoration;
        save(taskarr);
        window.location.reload();
      }
     
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
     
      }
    })
    
    save(taskarr);
   
  
  }
  
  function save(taskarr){
    if(window.localStorage.getItem("tasks")){
      window.localStorage.setItem("tasks",JSON.stringify(""));
    }
      window.localStorage.setItem("tasks",JSON.stringify(taskarr));
      checkcount(taskarr);
    }

function deletallfn(){
  window.localStorage.clear();
  window.location.reload();
  totaltasks.innerHTML="Total Tasks: " + taskarr.length;

}
  addbtn.addEventListener("click",addfn);
  deleteall.addEventListener("click",deletallfn);
  
  function removefromlocal(taskid){
   taskarr=taskarr.filter((task)=> task.id != taskid);
   save(taskarr);
   window.location.reload();
   totaltasks.innerHTML="Total Tasks: " + taskarr.length;
   checkcount(taskarr);

  }

function checkcount(taskarr){
  checknum=0;
  taskarr.forEach((task)=>{
    if(task.check==true)
    checknum++;
  })
  
  checknumdiv.innerHTML="Completed Tasks " + checknum;
  checktodonumdiv.innerHTML="Tasks To do " + (+ taskarr.length - checknum);
  
 
 
}
 total=taskarr.length;
 var donepercentage=checknum/total*100;


 //progress circle
 
  let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");
  let counter = 0;  
  donepercentage=Math.round(donepercentage);
  var progressEndValue;

  if(total==0 || checknum==0 || Number.isNaN(donepercentage)){
    progressEndValue=0;
    }
  else{
    progressEndValue=donepercentage;
  }
  let progress = setInterval(() => {
  if(counter == progressEndValue){
      clearInterval(progress);
      counter--;
  }  
  counter++;
  progressValue.innerHTML=counter + "%";
  circularProgress.style.background = `conic-gradient(#395144 ${counter * 3.6}deg, #ededed 0deg)`  
  }, 40);
