import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  constructor (private toDoService: TodoService) {}

  onClick() {
    const newList = { id: uuidv4(), title: 'New list', draggableItem: [] };
    this.toDoService.setColumnData(newList)
  }
}
