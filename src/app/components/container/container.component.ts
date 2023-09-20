import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { Category } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent implements OnInit{
  columnData: Category[] = [];
  
  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService.columnData.subscribe((data: any) => {
      this.columnData = data
    })
  }
  handleEdit(value: any) {
    //TODO: handle emit there, modify the subject via next()
  }
}
