import { Component, Input, Output, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Category, Task } from 'src/app/types/task-management.models';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent {
  @Input() data!: Category;
  @Input() columnData: any
  @ViewChild('template') templateRef!: TemplateRef<any>;
  @Output() modifyData = new EventEmitter<any>()
  dataToEdit!: Task

  constructor(public modalService: ModalService) { }


  handleOperation(event: any): void {
    if (event.method === 'delete') {
      const filteredData = this.data?.draggableItem.filter(item => item.content.id !== event.content.id)
      this.data.draggableItem = filteredData;
      this.modifyData.emit({ method: 'DeleteCard' })
    }
    if (event.method === 'edit') {
      this.dataToEdit = event.content;
      this.modalService.openModal(this.templateRef)
    }
  }
  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }
  onDrop(event: DndDropEvent, list: any[]) {
    if (event.dropEffect === 'move') {
      let index = event.index;
      list.splice(index!, 0, event.data);
    };
  };
  onDragEnd(event: DragEvent) {
    this.modifyData.emit({method: 'Drag'})
  }
}
