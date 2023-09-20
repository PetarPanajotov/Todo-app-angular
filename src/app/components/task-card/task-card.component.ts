import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { Category } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent {
  @Input() data!: Category

  constructor(public toDoService:TodoService) {}

  handleOperation(event: any):void {
    if(event.method === 'delete') {
      const filtered = this.data?.draggableItem.filter(item => item.content.id !== event.content.id)
      this.data.draggableItem = filtered;
    }
  }

  onDragged = this.toDoService.onDragged
  onDrop = this.toDoService.onDrop
}
