
var input = document.getElementById("new-task");
var addBtn = document.getElementById("add-btn");
var tasks = document.getElementById("all-tasks");

function createNewTask(text){
  var l = document.createElement("li");
  var label = document.createElement("label");
  var checkBox = document.createElement("input");
  var delBtn = document.createElement("button");
  
  label.innerText = text;
  checkBox.type = "checkbox";
  delBtn.className = "fa fa-trash-o";
  delBtn.id = "del";
  l.appendChild(checkBox);
  l.appendChild(label);
  l.appendChild(delBtn);
  return l;
}

function addTask(){
  console.log("Add Task...");

  var l = createNewTask(input.value);
  tasks.appendChild(l);
  bindTasks(l,taskCompltd);
  input.value = "";
}

var delTask = function(){
  console.log("Delete Task...");

  var l = this.parentNode;
  var ul = l.parentNode;
  ul.removeChild(l);
}

var taskCompltd = function(){
  console.log("Complete Task...");
  
  var l = this.parentNode;
  l.className = "complete";
  bindTasks(l,taskInCompltd);
}

var taskInCompltd = function(){
  console.log("Incomplete Task...");
  
  var l = this.parentNode;
  l.className = "not-complete";
  bindTasks(l,taskCompltd);
}

addBtn.onclick = addTask();
addBtn.addEventListener("click",addTask);

function bindTasks(task, f){
  var checkBox = task.querySelector("input[type=checkbox]");
  var delBtn = task.querySelector("button#del");

  delBtn.onclick = delTask;
  checkBox.onchange = f;
}