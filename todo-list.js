class TaskCard {
  constructor(title, tasks) {
    this.id = Date.now();
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
    // this.urgentButton
    // if (this.urgent === true) {
    //   return 'check-yo-self-icons/urgent-active.svg';
    // } else {
    //   return 'check-yo-self-icons/urgent.svg'
    // }
  }

    saveToStorage() {
    var stringified = JSON.stringify(taskCollection);
    localStorage.setItem('tasks', stringified);
    }

    // deleteFromStorage() {

    // }

    // updateToDo() {

    // }

    // updateTask() {
    
    // }
}

  class Task {
    constructor(item) {
    this.item = item;
    this.done = false;
    this.id = Date.now();
    // this.checkboxButton;
    // if (this.done === true) {
    //   return 'check-yo-self-icons/checkbox-active.svg';
    // } else {
    //   return 'check-yo-self-icons/checkbox.svg';
    // }
  }
}

