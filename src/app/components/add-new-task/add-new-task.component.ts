import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.sass']
})
export class AddNewTaskComponent {
  @Input() columnId: string | undefined;
  constructor(public modalService: ModalService) { }
}
