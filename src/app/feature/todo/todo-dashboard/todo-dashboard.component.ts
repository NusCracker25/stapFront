import { Task } from './../../../core/model/task';
import { NGXLogger } from 'ngx-logger';
import { TaskService } from './../../../core/task.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'stap-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'To do', cols: 1, rows: 1 },
          { title: 'Done', cols: 1, rows: 1 },
          { title: 'Details', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'To do', cols: 1, rows: 1 },
        { title: 'Details', cols: 3, rows: 3 },
        { title: 'Done', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

taskList = [{
  id: 1,
  title: 'orange',
  description: '1 ou 2',
  isComplete: false
},
{
id: 2,
title: 'supermarket',
description: '1 ou 2',
isComplete: false
},
{
  id: 3,
  title: 'antivirus',
  description: '1 ou 2',
  isComplete: true
  }];
  newTask: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private tasks: TaskService,
    private logger: NGXLogger) {}

  /**
   * total amount of tasks
   */
    totalCount = -1;

ngOnInit(){
  this.tasks.tasksCount()
  .subscribe((data: any) => {
    this.totalCount = data.count;
  });
  this.tasks.getTasks()
  .subscribe((list: Task[]) => {
    // pushes the list ffrom server in array test
    this.taskList = list;
  });
}

  addTask(){
    this.tasks.createTask(this.newTask);
    this.newTask = '';
  }
}
