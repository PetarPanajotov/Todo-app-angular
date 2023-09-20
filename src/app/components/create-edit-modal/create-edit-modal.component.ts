import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { TodoService } from 'src/app/services/todo-service.service';
import { Category, TaskDraggable, Task } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-create-edit-modal',
  templateUrl: './create-edit-modal.component.html',
  styleUrls: ['./create-edit-modal.component.sass']
})
export class CreateEditModalComponent implements OnInit, OnDestroy {
  isEdit: boolean = false;
  title = this.isEdit ? 'Edit Task' : 'Create Task';
  columnId = this.modalService.columnId;
  columnData!: Category[];
  tags: string[] = [];
  tag: string = '';

  taskCardForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    dueTo: new FormControl(''),
  });

  ngOnInit(): void {
    this.todoService.columnData.subscribe((data: any) => {
      this.columnData = data
    })
  }

  constructor(public modalService: ModalService, private todoService: TodoService) { }

  onTagsChange(tag: string): void {
    this.tags.push(tag)
  };

  onSubmit(): void {
    const column = this.columnData.find(column => column.id === this.columnId);
    const { name, description, dueTo } = this.taskCardForm.value;
    if (name && description && dueTo) {
      const contentItem: Task = {
        name: name,
        description: description,
        dueTo: dueTo,
        tags: this.tags
      };
      const formData: TaskDraggable = {
        content: contentItem
      };
      column?.draggableItem.push(formData);
    }
  }
  ngOnDestroy(): void {
  }
};
