// Global Variables
var titleInput = document.querySelector(".sidebar__form1--input");
var ul = document.querySelector("#sidebar__list");
var taskInput = document.querySelector(".sidebar__form2--input");
var addItemButton = document.querySelector(".sidebar__form2--image");
var addListButton = document.querySelector(".sidebar__form2--button2");
var clearButton = document.querySelector(".sidebar__form2--button3");
var filterButton = document.querySelector(".sidebar__form2--button4");
var cardContainer = document.querySelector(".todo");
var taskCollection = [];

// Event Listeners
window.addEventListener('load', loadPage);
taskInput.addEventListener('input', enableItemButton);
titleInput.addEventListener('input', enableListButton);
addItemButton.addEventListener('click', createTask);
addListButton.addEventListener('click', createTaskInstance);
ul.addEventListener('click', removeTask);


// Functions

function loadPage(e) {
  addItemButton.disabled = true;
  addListButton.disable = true;
}

function enableItemButton(e) {
  if (taskInput.value !== "") {
    addItemButton.disable = false;
    console.log("yay");
  }
}

function enableListButton(e) {
  if (titleInput.value !== "") {
    addListButton.disable = false;
        console.log("yipee");
  }
}

function createTask(item) {
  ul.innerHTML += `
  <li class="sidebar__list--container">
    <img class="sidebar__list--image--delete" src="check-yo-self-icons/delete.svg">
    <p class="sidebar__list--item" data-id=${Date.now()}>${taskInput.value}</p>
  </li>
  `;
  taskInput.value = "";
}

// function compileTasks(e) {
//   var taskItems = document.querySelectorAll('.sidebar__list--item');
//   if (titleInput.value && taskItems.innerHTML !== "")
//     var listInstance = new toDoList(titleInput.value, tasks)


//   var taskItems = document.querySelectorAll('.sidebar__list--item');
//   console.log(taskItems);
  // for (i = 0; i < taskCollection.length; i++) {

  // }
// }

function createTaskInstance() {
  var 
  var itemInstance = new ToDoList(Date.now(), titleInput.value, taskInput.value);
  taskCollection.push(itemInstance);
  createCard();
}

function createCard() {
  console.log(true);
  var listCard = `
  <div class="todo__card--container">
    <article class="todo__card--header">
      <h3 class="todo__card--title">${titleInput.value}</h3>
    </article>
    <section class="todo__card--middle">
      <img/>
      <p class="todo__card--task">${taskCollection.innerText}</p>
    </section>
    <article class="todo__card--footer">
      <img class="todo__card--button--urgent" src="check-yo-self-icons/urgent.svg"/>
      <img class="todo__card--button--delete" src="check-yo-self-icons/delete.svg"/>
    </article>
  </div>
  `;
  cardContainer.insertAdjacentHTML('afterbegin', listCard)
  titleInput.value = "";

}

function appendTaskList() {
  console.log("test2");
}

function removeTask(e) {
  e.target.closest('li').remove();
}












//create a hidden ul for which we can add an image and text li (item)
//var createElement
//var add text to created element (innerText)
//var add text to created element (innerText
//add text to the DOM

// function restoreCards() {
//   var taskObject = JSON.parse(localStorage.getItem("item")) || [];
// }


/* TESTING */

// function loadPage() {
//   addItemButton.disabled = true;
//   addListButton.disabled = true;
// }

// function enableItemButton(e) {
//   if (taskInput.value !== "") {
//     addItemButton.disabled = false;
//   } 
// }

// function enableListButton(e) {

//   if (titleInput.value !== "") {
//     addListButton.disabled = false;
//   }
// }


// function createTask(item) {
//   var ul = document.querySelector("#sidebar__list");
//   var li = document.createElement('li');
//   var deleteItemImage = document.createElement('img');
//   deleteItemImage.src = "check-yo-self-icons/delete.svg";
//   deleteItemImage.classList.add('sidebar__list--image--delete');
//   li.appendChild(deleteItemImage);
//   li.appendChild(document.createTextNode(taskInput.value));
//   ul.appendChild(li); 
//   taskInput.value = "";
//   deleteItemImage.onclick = eraseItem;
// }

// function createTaskList(items) {
//   var urgent = false
//   var listObject = new ToDoList(Date.now(), titleInput.value, tasks.value, urgent);
//   console.log(tasks);
//   // listObject.push(items);
//   createCard();
// }

// function createCard() {
//   console.log(true);
//   var listCard = `
//   <div class="todo__card--container">
//     <article class="todo__card--header">
//       <h3 class="todo__card--title">${titleInput.value}</h3>
//     </article>
//     <section class="todo__card--middle">
//       <img/>
//       <p class="todo__card--task">${tasks}</p>
//     </section>
//     <article class="todo__card--footer">
//       <img class="todo__card--button--urgent" src="check-yo-self-icons/urgent.svg"/>
//       <img class="todo__card--button--delete" src="check-yo-self-icons/delete.svg"/>
//     </article>
//   </div>
//   `;
//   cardContainer.insertAdjacentHTML('afterbegin', listCard)
//   titleInput.value = "";

// }

// function eraseItem(e) {
// e.target.parentElement.remove('li');
// }

/*
1. create an object out of the task title and items
2. push object into an instance with same properties as card
3. move the object into the appended card
*/

// function populateCard(titleInput, tasks) {
//   tasks.forEach(function(item) {
//     item = 
//   }
// }

// function pushTask(task) {
//   var urgent = false;
//   var item = new ToDoList(Date.now(), titleInput.value, taskInput.value, urgent);
//   taskObject.push(item);
//   item.saveToStorage(taskObject);
//   createCard(item);
// }
