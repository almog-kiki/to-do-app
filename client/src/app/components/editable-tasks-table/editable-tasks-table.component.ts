import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';    
import { TodolistService } from '../../services/todolist.service';
import * as Utils from '../../lib/utils';

@Component({
  selector: 'app-editable-tasks-table',
  templateUrl: './editable-tasks-table.component.html',
  styleUrls: ['./editable-tasks-table.component.scss']
})
export class EditableTasksTableComponent implements OnInit {

  editField: string;
  isLoading = true;
  tasks: any;

  constructor(private todolistService: TodolistService, private eventEmitterService: EventEmitterService ) { }
  
  ngOnInit(): void {
    this.retrieveTasks();
    if (this.eventEmitterService.refreshTodoListSubs === undefined) {    
        this.eventEmitterService.refreshTodoListSubs = this.eventEmitterService.invokeRefreshToDoList
          .subscribe(() => {   this.retrieveTasks(); });    
    }  
  }
  ngOnDestroy():void{
    this.eventEmitterService.refreshTodoListSubs  = undefined;
  }
 

  updateList(id: number, property: string, task: any,event: any) {
    const editField = event.target.textContent;
    if(Utils.isStringsEqual(this.tasks[id][property], editField)){
      return;
    }

    let updatedObject = {
      [property]: editField
    }
    this.todolistService.update(task.id, updatedObject).subscribe(response => {this.refreshList();});
  }

  remove(id: any) {
    this.todolistService.delete(id).subscribe( response => { this.refreshList();});
  }

  changeValue(event: any) {
    this.editField = event.target.textContent;
  }

  retrieveTasks() {
    this.isLoading = true;
    this.todolistService.getAll()
       .subscribe(
        data => {
          this.tasks = data;
          Utils.convertDateToClientFormat(data);
          this.isLoading = false;
        });
  }

  refreshList() {
    this.retrieveTasks();
  }

  removeAllTasks() {
    this.todolistService.deleteAll().subscribe(response => {this.retrieveTasks();});
  }

}
