import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-edit-modal',
  templateUrl: './create-edit-modal.component.html',
  styleUrls: ['./create-edit-modal.component.sass']
})
export class CreateEditModalComponent {
  isEdit: boolean = false;
  tags: string[] = [];
  tag: string = ''
  title = this.isEdit? 'Edit Task': 'Create Task'
  constructor(public modalService: ModalService) {}
  onTagsChange(tag: string): void {
    this.tags.push(tag)
  }
};
