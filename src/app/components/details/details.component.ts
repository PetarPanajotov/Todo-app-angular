import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Task } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit{
  @Input() taskCardDetails: Task | undefined;
  constructor(public modalService: ModalService) {}
  
  ngOnInit(): void {
    console.log(this.taskCardDetails)
  }
}
