import { Component, OnInit , Input ,Output , EventEmitter} from '@angular/core';
import { TodoItem } from './../shared/todo-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input() items: TodoItem[];
  
@Output() deleteTodoEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  

  
itemClick(item){
  item.done = !item.done;
}

delete(item){
  this.deleteTodoEvent.emit(item);
}
  

}
