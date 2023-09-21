import { Injectable } from '@angular/core';
import { Category } from '../types/task-management.models';
import { BehaviorSubject } from 'rxjs';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  columnData = new BehaviorSubject<Category[]>([])
  activeDropZone: string | undefined;

  constructor() {
    const localStorageData = localStorage.getItem('toDoList');
    if (localStorageData) {
      this.columnData.next(JSON.parse(localStorageData));
    } else {
      this.columnData.next(
        [{
          id: '1',
          title: 'To-do',
          draggableItem: []
        },
        {
          id: '2',
          title: 'In Progress',
          draggableItem: []
        },
        {
          id: '3',
          title: 'Done',
          draggableItem: []
        }]
      )
    }
    localStorage.setItem('toDoList', JSON.stringify(this.columnData.value));
  }

  
  setColumnData(newList:any) {
    const oldData = this.columnData.value;
    const updatedData = ([...oldData, newList]);
    this.columnData.next(updatedData);
    localStorage.setItem('toDoList', JSON.stringify(updatedData));
  }
  deleteColumnData(remainingColumns: any) {
    this.columnData.next(remainingColumns);
    localStorage.setItem('toDoList', JSON.stringify(remainingColumns));
  }
  editedColumnData(editedListData: any) {
    this.columnData.next(editedListData);
    localStorage.setItem('toDoList', JSON.stringify(editedListData));
  };
  // drag and drop functioanlity
  onDragStart(event: DragEvent, dropZone: string) {
    if (dropZone === 'Column') {
      this.activeDropZone = 'Column'
    } else if (dropZone === 'Task') {
      this.activeDropZone = 'Task'
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
  onDragEnd(event: DragEvent, data?: any) {
    this.editedColumnData(this.columnData.value)
  };
  //methods for state management
  handleMethods(value: any) {
    if (value.method === "Edit") {
      const find = this.columnData.value.find(item => item.id === value.id)
      if (find) {
        find.title = value.title;
        this.editedColumnData(this.columnData)
      };
    } else if (value.method === "Delete") {
      const filteredData = this.columnData.value.filter(item => item.id !== value.id)
      this.deleteColumnData(filteredData)
    } else if (value.method === "DeleteCard") {
      this.deleteColumnData(this.columnData.value)
    }
  };
};
