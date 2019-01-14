import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // This is used to store the task, stores the list of task
  tasks = [];

  // This is to maintain the reference of bootstrap modal
  modalRef: BsModalRef;
  
  // stores the task whose modal has been opened
  taskToComplete;
  
  /**
   * @description we inject the services we want to use in DashboardComponent
   */
  constructor(public taskService: TaskService, public modalService: BsModalService) {
    console.log('here in dashboard');
  }

  /** 
   * @description when component constructor has been executed, init gets called
   * here we are fetching the tasks from taskService
  */
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  /**
   * @description when delete button gets clicked, we want to show the modal.
   * We pass 2 param:
   * template(html) that we want to show in modal
   * the task which needs to be deleted.
   */
  openModal(template, task) {
    this.modalRef = this.modalService.show(template);
    this.taskToComplete = task;
  }

  /**
   * @description closes the modal if modal is opened.
   */
  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
      this.taskToComplete = null;
    }
  }

  /**
   * @description gets called when submit button is clicked
   * we create object data, which stores the data inputted by user.
   * we store the completed task in taskservice.
   * and remove it from the taskList.
   * and close the modal.
   */
  submitModal(timetaken, comments) {
    const data = {
      'TASK': this.taskToComplete.NAME,
      'TIMETAKEN': timetaken,
      'COMMENTS': comments
    };
    this.taskService.addCompletedTask(data);
    this.taskService.removeTask(this.taskToComplete.NAME);
    this.tasks = this.taskService.getTasks();
    this.closeModal();
  }
}
