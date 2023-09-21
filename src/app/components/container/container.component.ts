import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { Category } from 'src/app/types/task-management.models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent implements OnInit {
  columnData: Category[] = [];
  columnIsDragged = false;

  constructor(public toDoService: TodoService) { }

  ngOnInit(): void {
    this.toDoService.columnData.subscribe((data: any) => {
      this.columnData = data;
    })
  }
  handleEdit(value: any) {
    if (value.method === "Edit") {
      const find = this.columnData.find(item => item.id === value.id)
      if (find) {
        find.title = value.title;
        this.toDoService.editedColumnData(this.columnData)
      };
    } else if (value.method === "Delete") {
      const filteredData = this.columnData.filter(item => item.id !== value.id)
      this.toDoService.deleteColumnData(filteredData)
    } else if (value.method === "DeleteCard") {
      this.toDoService.deleteColumnData(this.columnData)
    }
  };
};
