class TaskCard {
  constructor(title, tasks) {
    this.id = Date.now();
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }
    saveToStorage() {
      var stringified = JSON.stringify(taskCollection);
      localStorage.setItem('tasks', stringified);
    }
  //   deleteFromStorage() {
  //     localStorage.remove()
  //   }
  // }
}

class Task {
  constructor(item) {
    this.item = item;
    this.done = false;
    this.id = Date.now();
  }
}

