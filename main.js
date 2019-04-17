// Global Variables
var titleInput = document.querySelector(".sidebar__form1--input");
var ul = document.querySelector("#sidebar__list");
var taskInput = document.querySelector(".sidebar__form2--input");
var addItemButton = document.querySelector(".sidebar__form2--image");
var addListButton = document.querySelector(".sidebar__form2--button2");
var clearButton = document.querySelector(".sidebar__form2--button3");
var filterButton = document.querySelector(".sidebar__form2--button4");
var cardContainer = document.querySelector(".todo");
var tasksArray = [];
// var taskCollection = [];
// var newTaskList;
var taskCollection = JSON.parse(localStorage.getItem('tasks')) || [];

// Event Listeners
// window.addEventListener('load', loadPage);
// taskInput.addEventListener('input', enableItemButton);
// titleInput.addEventListener('input', enableListButton);
addItemButton.addEventListener('click', establishArray);
addListButton.addEventListener('click', compileItemsToCard);
ul.addEventListener('click', eraseItem);
clearButton.addEventListener('click', clearAll);


// Functions

function loadPage(e) {
  addItemButton.disabled = true;
  addListButton.disable = true;
}

function establishArray() {
  if (taskInput.value != "") {
    var newTask = new Task(taskInput.value);
    tasksArray.push(newTask);
    createItem(newTask);
  } 
}

function createItem(item) {
  ul.innerHTML += `
  <li class="sidebar__list--container">
    <img class="sidebar__list--image--delete" src="check-yo-self-icons/delete.svg">
    <p class="sidebar__list--item" data-id="${item.id}">${taskInput.value}</p>
  </li>
  `;
  taskInput.value = "";
}

function eraseItem(e) {
var li = document.createElement('li');
e.target.parentElement.remove(li);
}


function compileItemsToCard(e) {
  if (titleInput.value != '' && ul.innerText != '') {
    var newTaskList = new TaskCard(titleInput.value, tasksArray);
    taskCollection.push(newTaskList);
    newTaskList.saveToStorage();
    createCard(newTaskList);
  }
}

function clearAll(e) {
  if (titleInput.value != '' && ul.innerText != '') {
    taskInput.value = "";
    titleInput.value = "";
    taskArray = [];
    ul.innerText = "";
  }
}

function createCard(newTaskList) {
  console.log(true);
  var listCard = `
  <div class="todo__card--container" data-id=${newTaskList.id}>
    <article class="todo__card--header">
      <h3 class="todo__card--title">${newTaskList.title}</h3>
    </article>
    <section class="todo__card--middle">
    ${appendTaskList(newTaskList)}
    </section>
    <article class="todo__card--footer">
      <img class="todo__card--button--urgent" src="check-yo-self-icons/urgent.svg"/>
      <p class="todo__card--text--urgent">URGENT</p>
      <img class="todo__card--button--delete" src="check-yo-self-icons/delete.svg"/>
      <p class="todo__card--text--delete">DELETE</p>
    </article>
  </div>
  `;
  cardContainer.insertAdjacentHTML('afterbegin', listCard)
  clearAll();
}

function appendTaskList(newTaskList) {
  var loopTasks = '';
  for (var i = 0; i < newTaskList.tasks.length; i++) {
    loopTasks += `
    <div class="todo__card--middle--container">
      <img class='todo__card--checkbox' src="check-yo-self-icons/checkbox.svg" 
      data-id=${newTaskList.tasks[i].id}>
      <p class="todo__card--checkbox">${newTaskList.tasks[i].item}</p>
    `
  } return loopTasks;
}

