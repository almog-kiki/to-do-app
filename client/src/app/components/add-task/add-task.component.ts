import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';
import { EventEmitterService } from '../../services/event-emitter.service';    

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task = {
    title: '',
    content: '',
  };

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private todolistService: TodolistService, 
              private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
  }

  clearFields(){
    this.task = {
      title: '',
      content: '',
    };
  }

  saveTask() {
    const data = {
      title: this.task.title,
      content: this.task.content
    };

    this.todolistService.create(data)
      .subscribe(
        response => {
          this.clearFields();
          this.eventEmitterService.refreshToDoList();
        });
  }

}
