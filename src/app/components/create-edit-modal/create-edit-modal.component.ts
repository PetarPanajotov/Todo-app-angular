import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { TodoService } from 'src/app/services/todo-service.service';
import { Category, TaskDraggable, Task } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-create-edit-modal',
  templateUrl: './create-edit-modal.component.html',
  styleUrls: ['./create-edit-modal.component.sass']
})
export class CreateEditModalComponent implements OnInit, OnDestroy {
  @Input() dataToEdit: Task | undefined;
  isEdit: boolean = false;
  columnId = this.modalService.columnId;
  columnData!: Category[];
  tags?: string[] = [];
  tag: string = ''; 
  subscription: Subscription | undefined;
  taskCardForm!: FormGroup;

  ngOnInit(): void {
    this.isEdit = !!this.dataToEdit;
    this.taskCardForm = new FormGroup({
      name: this.isEdit ? new FormControl(this.dataToEdit?.name) : new FormControl(''),
      description: this.isEdit ? new FormControl(this.dataToEdit?.description) : new FormControl(''),
      dueTo: this.isEdit ? new FormControl(this.dataToEdit?.name) : new FormControl(''),
    });
    this.tags = this.isEdit? this.dataToEdit?.tags: [];
    this.todoService.columnData.subscribe((data: any) => {
      this.columnData = data
    })
  }

  constructor(public modalService: ModalService, private todoService: TodoService) { }

  onTagsChange(tag: string): void {
    this.tags!.push(tag)
  };

  onSubmit(): void {
    const column = this.columnData.find(column => column.id === this.columnId);
    const { name, description, dueTo } = this.taskCardForm.value;
    if (name && description && dueTo) {
      const contentItem: Task = {
        name: name,
        createdOn: new Date().toString(),
        description: description,
        dueTo: dueTo,
        tags: this.tags
      };
      const formData: TaskDraggable = {
        content: contentItem
      };
      if(this.isEdit) {
        
      }
      column?.draggableItem.push(formData);
      this.modalService.modalRef?.hide();
    };
  };

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    };
  };
};
