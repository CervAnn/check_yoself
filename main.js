// Global Variables
var titleInput = document.querySelector(".navbar__form1--input");
var taskInput = document.querySelector(".sidebar__form2--input");
var addItemButton = document.querySelector(".sidebar__form2--image");
var addListButton = document.querySelector(".sidebar__form2--button2")
var clearButton = document.querySelector(".sidebar__form2--button3");
var filterButton = document.querySelector(".sidebar__form2--button4");
var cardContainer = document.querySelector(".todo");
var task = [];


// Event Listeners
window.addEventListener('load', loadPage);
taskInput.addEventListener('keyup', enableItemButton)
titleInput.addEventListener('keyup', enableListButton)
addItemButton.addEventListener('click', createItem);
// addTaskButton.addEventListener('click', appendItem)

// Functions

//create a hidden ul for which we can add an image and text li (item)
//var createElement
//var add text to created element (innerText)
//var add text to created element (innerText
//add text to the DOM

function loadPage() {
  addListButton.disabled = true;
  addItemButton.disabled = true;
}

function enableButton(e) {
  if (taskInput.value.length > 0) {
    addItemButton.disabled = false;
  } else {
    addItemButton.disabled = true;
  }
}

function enableItemButton(e) {
  if (taskInput.value === "") {
    addItemButton.disabled = true;
  } else {
    addItemButton.disabled = false;
  }
}

function enableListButton(e) {
  if (titleInput.value === "") {
    addListButton.disabled = true;
  } else {
    addListButton.disabled = false;
  }
}

function createItem(item) {
  var ul = document.querySelector("#sidebar__list");
  var li = document.createElement('li');
  var deleteItemImage = document.createElement('img');
  deleteItemImage.src = "check-yo-self-icons/delete.svg";
  deleteItemImage.classList.add('sidebar__list--image--delete');
  li.appendChild(deleteItemImage);
  li.appendChild(document.createTextNode(taskInput.value));
  ul.appendChild(li); 
  taskInput.value = "";
  deleteItemImage.onclick = eraseItem;
}

function createCard(item) {
  var listCard = `
  <div class="todo__card--container">
    <header class="todo__card--header">${titleInput.value}</header>
    <section class="todo__card--middle">
      <p class="todo__card--task"></p>
    </section>
    <section class="todo__card--footer">
      <button class="todo__card--button--urgent" src="check-yo-self-icons/urgent.svg"/>
      <button class="todo__card--button--urgent" src="check-yo-self-icons/urgent-active.svg"/>
    </section>
  </div>
  `
  cardContainer.insertAdjacentHTML('afterbegin', listCard)
}

function eraseItem(e) {
var li = document.createElement('li');
e.target.parentElement.remove(li);
}
