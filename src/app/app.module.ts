import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { TodoComponent } from './completed-todo/todo.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

const appRoot: Routes = [
  {path: '', redirectTo: 'task', pathMatch: 'full'},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'task', component : TaskComponent},
  {path : 'todo', component : TodoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    DashboardComponent,
    TaskComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoot),
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [ ModalModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
