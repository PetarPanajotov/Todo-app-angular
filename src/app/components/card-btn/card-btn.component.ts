import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Task, TaskDraggable } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-card-btn',
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.sass']
})
export class CardBtnComponent {
  @Input() cardTaskData: TaskDraggable | undefined;
  @Output() operation: EventEmitter<any> = new EventEmitter();

  constructor(public modalService: ModalService) {}

  onDelete():void {
    this.operation.emit({method: 'delete', content: this.cardTaskData?.content})
  };
  onEdit(): void {
    this.operation.emit({method: 'edit', content: this.cardTaskData?.content})
  };
}
