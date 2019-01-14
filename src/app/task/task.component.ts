import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // this is to show form submission message to user.
  completed: boolean;

  // we inject taskService to use in taskComponent
  constructor(public taskServie: TaskService) {}

  ngOnInit() {
    // in the begining this value is false (form is not submitted)
    this.completed = false;
  }

  /**
   * @description stores the task created by user in taskService.
   */
  saveTask(name) {
    const task = {
      'NAME': name
    };
    this.taskServie.saveTask(task);
    this.completed = true;
  }

}
