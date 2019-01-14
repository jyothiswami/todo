import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = [];
  constructor(public taskService: TaskService) {
    console.log('here in todo');
   }

  ngOnInit() {
    this.tasks = this.taskService.getCompletedTasks();
  }
}
