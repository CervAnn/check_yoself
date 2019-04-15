// Global Variables
var titleInput = document.querySelector(".navbar__form1--input");
var taskInput = document.querySelector(".sidebar__form2--input");
var addItemButton = document.querySelector(".sidebar__form2--image");
var addListButton = document.querySelector(".sidebar__form2--button2")
var clearButton = document.querySelector(".sidebar__form2--button3");
var filterButton = document.querySelector(".sidebar__form2--button4");
var task = [];


// Event Listeners
window.addEventListener('load', loadPage);
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
  if (taskInput.value.length === 0) {
    addItemButton.disabled = true;
    console.log(true);
  } else {
    addItemButton.disabled = false;
    console.log(false);
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

function eraseItem(e) {
var li = document.createElement('li');
e.target.parentElement.remove(li);
}
