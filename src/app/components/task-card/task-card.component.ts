import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TodoService } from 'src/app/services/todo-service.service';
import { Category, Task } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent {
  @Input() data!: Category;
  @ViewChild('template') templateRef!: TemplateRef<any>;
  dataToEdit!: Task

  constructor(public toDoService:TodoService, public modalService: ModalService) {}


  handleOperation(event: any):void {
    if(event.method === 'delete') {
      const filteredData = this.data?.draggableItem.filter(item => item.content.id !== event.content.id)
      this.data.draggableItem = filteredData;
    }
    if(event.method === 'edit') {
      this.dataToEdit =  event.content;
      this.modalService.openModal(this.templateRef)
    }
  }

  onDragged = this.toDoService.onDragged
  onDrop = this.toDoService.onDrop
}
