import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  // keeps the task list. which will be used by dashboard component and completed-todo component.
  // tasks will be modified by dashboard component
  tasks = [
    {
       "NAME":"study"
    },
    {
       "NAME":"let us c"
    },
    {
       "NAME":"o rielly"
    },
    {
       "NAME":"php"
    },
    {
       "NAME":"mysql"
    }
  ];

  // keeps the tasks that has been completed.
  // where each task will have, 
  // {
  //  TASK: string,
  //  TIMETAKEN: number,
  //  COMMENTS: string
  // }
  completedTasks: any = [];

  /**
   * @description: saves the task in tasks list, which has been added by user in taskComponent
   */
  saveTask(task) {
      this.tasks.push(task);
  }

  /**
   * @description: dashboard fetches the tasks list.
   */
  getTasks() {
      return this.tasks;
  }

  /**
   * @description: when submit is clicked in modal, the task is stored in completedTask list
   */
  addCompletedTask(task) {
    this.completedTasks.push(task);
  }

  /**
   * @description completed todo component fetches the completed task to show to user.
   */
  getCompletedTasks() {
    return this.completedTasks;
  }

  /**
   * @description we remove the task completed by user. 
   */
  removeTask(taskName) {
    let taskToBeRemoved = null;
    // find the index of task that needs to be removed.
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].NAME === taskName) {
        taskToBeRemoved = i;
      }
    }
    // remove only if the taskToBeRemoved is found in the tasks.
    if (taskToBeRemoved != null) {
      this.tasks.splice(taskToBeRemoved, 1);
    }
  }
}