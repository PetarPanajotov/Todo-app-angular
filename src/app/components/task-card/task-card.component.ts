import { Component, Input, Output, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Category, Task } from 'src/app/types/task-management.models';
import { TodoService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent {
  @Input() data!: Category;
  @Input() columnData: any;

  constructor(public modalService: ModalService, public toDoService: TodoService) { }

  handleOperation(event: any): void {
    if (event.method === 'delete') {
      const filteredData = this.data?.draggableItem.filter(item => item.content.id !== event.content.id)
      this.data.draggableItem = filteredData;
      this.toDoService.handleMethods({ method: 'DeleteCard' })
    };
  };
};
