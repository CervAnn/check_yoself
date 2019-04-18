class TaskCard {
  constructor(title, tasks, id, urgent) {
    this.id = id || Date.now();
    this.title = title;
    this.tasks = tasks;
    this.urgent = urgent || false;
  }
    saveToStorage() {
      var stringified = JSON.stringify(taskCollection);
      localStorage.setItem('tasks', stringified);
    }

    deleteFromStorage(itemIndex) {
      taskCollection.splice(itemIndex, 1);
      this.saveToStorage();
    }

    updateToDos(itemIndex, taskIndex) {
      this[itemIndex].tasks[taskIndex].done = !this[itemIndex].tasks[taskIndex].done;
      this.saveToStorage();
    }
  }

class Task {
  constructor(item) {
    this.item = item;
    this.done = false;
    this.id = Date.now();
  }
}

