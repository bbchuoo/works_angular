import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @Output() addTodoEvent = new  EventEmitter();  //宣告一個事件發射器給父層
  
    placeholderText='請輸入學習清單'
  
  getDate(){
    
    return new Date();
  }
  
  todoText = '';
  
  constructor() { }

  ngOnInit() {
  }
    addTodo($event){
    this.addTodoEvent.emit(this.todoText);
  }

}
