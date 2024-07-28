// Variables

const addTask = document.getElementById('add');
const tasks = document.getElementById('tasks');
const inputField = document.getElementById('input-field');

// Adding Event Listener for Add button

addTask.addEventListener('click', function(){
 // creating a div for each task
    let task = document.createElement('div');
    task.classList.add('task');
 // Creating list element for tasks
    let li = document.createElement('li');
    li.innerText = `${inputField.value}`;
    task.appendChild(li);
    setFocus();
 // creating a check button to check completed task
    let checkTask = document.createElement('button');
    checkTask.innerHTML = '<i class = "fa-solid fa-check"></i>';
    checkTask.classList.add('checkedTask');
    task.appendChild(checkTask);
 // creating an uncheck button to uncheck task
    let uncheckTask = document.createElement('button');
    uncheckTask.innerHTML = '<i class = "fa-solid fa-times"></i>';
    uncheckTask.classList.add('uncheckedTask');
    task.appendChild(uncheckTask);
 // creating a trash button to delete tasks 
    let deleteTask = document.createElement('button');
    deleteTask.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';
    deleteTask.classList.add('delTask');
    task.appendChild(deleteTask);    
 // if-else statement when user does not type anything in the input field     
    if(inputField.value === ''){
        alert("Please Enter a Task");
    }
    else{
        tasks.appendChild(task);
        saveTasks();
    }
    inputField.value = "";
 // addding an event listener when user wants to click the completed tasks    
    checkTask.addEventListener('click', function(){
        checkTask.parentElement.style.textDecoration = "line-through";
        checkTask.parentElement.style.textDecorationThickness = "2px";
        checkTask.parentElement.style.textDecorationColor = "brown"
      });
    uncheckTask.addEventListener('click', function(){
        checkTask.parentElement.style.textDecoration = "none";
    });
 // adding an event listener when the user clicks on the trash button
    deleteTask.addEventListener('click', function(){
        deleteTask.parentElement.remove();
        saveTasks();
        
        
    });

});

// creating a function to store to-do list data in browser's local storage

function saveTasks() {
   let taskElements = document.querySelectorAll('.task li');
   let taskList = [];
   taskElements.forEach(function (taskElement) {
       taskList.push(taskElement.innerText);
   });
   localStorage.setItem('tasks', JSON.stringify(taskList));
}
// setting the focus for the input field after adding each task

function setFocus(){
   document.getElementById("input-field").focus();
}
// functionality for Instruction Box

const accordian = document.getElementsByClassName('content-container');

for (i = 0; i < accordian.length; i++){
accordian[i].addEventListener('click', function(){
   this.classList.toggle('active');
 });
};
