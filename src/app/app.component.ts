import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myself introduction!';
  
  todoItems: TodoItem[] = [{
    id: 1,
    value: 'Angular',
    done: false
  }, {
    id: 2,
    value: 'Bootstrap',
    done: true
  }, {
    id: 3,
    value: 'jQuery/JavaScript',
    done: false
  }];
  
  
  addTodoItem(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }
  
    
  
   deleteTodoItem(item) {
    this.todoItems.splice(this.todoItems.indexOf(item), 1);
  
}
}
