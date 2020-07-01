import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  
  invokeRefreshToDoList = new EventEmitter();    
  refreshTodoListSubs: Subscription;    
    
  constructor() { }    
    
  refreshToDoList() {    
    this.invokeRefreshToDoList.emit();    
  } 
}
