import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { TodoService } from 'src/app/services/todo-service.service';
import { Category } from 'src/app/types/columnList';

@Component({
  selector: 'app-column-container',
  templateUrl: './column-container.component.html',
  styleUrls: ['./column-container.component.sass'],
})
export class ColumnContainerComponent implements OnInit{
  columnData: Category[] = [];
  
  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService.columnData.subscribe((data: any) => {
      this.columnData = data
    })
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
  }
  handleEdit(value: any) {
    //TODO: handle emit there, modify the subject via next()
  }
}
