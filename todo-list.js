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

    updateTask(itemIndex, taskIndex) {
      taskCollection[itemIndex].tasks[taskIndex].done = !taskCollection[itemIndex].tasks[taskIndex].done;
      taskCollection[itemIndex].saveToStorage();
    }

    updateToDo(itemIndex) {

    }
  }

class Task {
  constructor(item) {
    this.item = item;
    this.done = false;
    this.id = Date.now();
  }
}

