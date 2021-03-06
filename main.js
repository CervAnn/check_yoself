var titleInput = document.querySelector(".sidebar__form1--input");
var ul = document.querySelector("#sidebar__list");
var taskInput = document.querySelector(".sidebar__form2--input");
var addItemButton = document.querySelector(".sidebar__form2--image");
var addListButton = document.querySelector(".sidebar__form2--button1");
var clearButton = document.querySelector(".sidebar__form2--button2");
var cardContainer = document.querySelector(".todo");
var tasksArray = [];
var taskCollection = JSON.parse(localStorage.getItem('tasks')) || [];

window.addEventListener('load', loadPage);
addItemButton.addEventListener('click', establishArray);
addListButton.addEventListener('click', compileItemsToCard);
ul.addEventListener('click', removeTask);
clearButton.addEventListener('click', clearAll);
cardContainer.addEventListener('click', removeCard);
cardContainer.addEventListener('click', checkTask);

function loadPage(e) {
  addItemButton.disabled = true;
  addListButton.disable = true;
  restoreTaskCards();
  restoreTaskMethods();
}

function establishArray(e) {
  if (taskInput.value != "") {
    var newTask = new Task(taskInput.value);
    tasksArray.push(newTask);
    createItem(newTask);
  } 
}

function createItem(item) {
  ul.innerHTML += `
  <li class="sidebar__list--container" data-id="${item.id}">
    <img class="sidebar__list--image--delete" src="check-yo-self-icons/delete.svg">
    <p class="sidebar__list--item">${taskInput.value}</p>
  </li>
  `;
  taskInput.value = "";
}

function compileItemsToCard(e) {
  if (titleInput.value != '' && ul.innerText != '') {
    var newTaskList = new TaskCard(titleInput.value, tasksArray);
    taskCollection.push(newTaskList);
    newTaskList.saveToStorage();
    createCard(newTaskList);
    clearAll();
  }
}

function clearAll(e) {
  if (titleInput.value != '' && ul.innerText != '') {
    taskInput.value = "";
    titleInput.value = "";
    tasksArray = [];
    ul.innerText = "";
  }
}

function createCard(newTaskList) {
  var listCard = `
  <div class="todo__card--container" data-id=${newTaskList.id}>
    <article class="todo__card--header">
      <h3 class="todo__card--title">${newTaskList.title}</h3>
    </article>
    <ul class="todo__card--middle">
    ${appendTaskList(newTaskList)}
    </ul>
    <article class="todo__card--footer">
      <div class="todo__card--buttons--container1">
        <img class="todo__card--button--urgent" src="check-yo-self-icons/urgent.svg"/>
        <p class="todo__card--text--urgent">URGENT</p>
      </div>
      <div class="todo__card--buttons--container2">
        <img class="todo__card--button--delete" src="check-yo-self-icons/delete.svg"/>
        <p class="todo__card--text--delete">DELETE</p>
      </div>
    </article>
  </div>
  `;
  cardContainer.insertAdjacentHTML('afterbegin', listCard);
  clearAll();
}

function appendTaskList(newTaskList) {
  var loopTasks = '';
  for (var i = 0; i < newTaskList.tasks.length; i++) {
    loopTasks += `
    <div class="todo__card--middle--container">
      <img class='todo__card--checkbox' src="check-yo-self-icons/checkbox.svg" 
      data-id=${newTaskList.tasks[i].id}>
      <p class="todo__card--task">${newTaskList.tasks[i].item}</p>
    </div>
    `;
  } return loopTasks;
}

function restoreTaskMethods() {
  var newCollection = taskCollection.map(function(list) {
    list = new TaskCard (list.title, list.tasks, list.id, list.urgent);
    return list;
  }); 
  taskCollection = newCollection;
}

function restoreTaskCards() {
  taskCollection.forEach(function(list) {
    createCard(list);
  });
}

function removeTask(e) {
 var task = e.target.closest('li');
 var taskId = parseInt(task.dataset.id);
 var itemIndex  = tasksArray.findIndex(item => item.id === taskId);
 tasksArray.splice(itemIndex, 1);
 task.remove();
}


function removeCard(e) {
  if (e.target.className === "todo__card--button--delete") {
    var card = e.target.closest(".todo__card--container")
    var cardId = parseInt(card.dataset.id)
    var itemIndex = taskCollection.findIndex(item => item.id === cardId);
    taskCollection[itemIndex].deleteFromStorage(itemIndex);
    card.remove();
  }
}


function checkTask(e) {
  if (e.target.className === "todo__card--checkbox") {
    var card = e.target.closest(".todo__card--container")
    var cardId = parseInt(card.dataset.id)
    var itemIndex = taskCollection.findIndex(item => item.id === cardId);
    var bigObj = taskCollection[itemIndex];
    var task = e.target;
    var taskId = parseInt(task.dataset.id);
    var taskIndex = taskCollection[itemIndex].tasks.findIndex(item => item.id === taskId);
    var smallTask = taskCollection[itemIndex].tasks[taskIndex];
    taskCollection[itemIndex].updateTask(itemIndex, taskIndex);
  }
}





