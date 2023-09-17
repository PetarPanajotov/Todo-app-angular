import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  constructor (private toDoService: TodoService) {}

  onClick() {
    const newList = { title: 'New list', draggableItem: [] };
    this.toDoService.setColumnData(newList)
  }
}
