import { Injectable } from '@angular/core';
import { Category } from '../types/task-management.models';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  columnData = new BehaviorSubject<Category[]>([])

  constructor() {
    debugger; 
    // Check if data exists in localStorage
    const localStorageData = localStorage.getItem('toDoList');

    if (localStorageData) {
      // Parse the data from localStorage and set it as the initial value
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
    localStorage.setItem('toDoList', JSON.stringify(this.columnData.value))
  }

  
  setColumnData(newList:any) {
    const oldData = this.columnData.value
    const updatedData = ([...oldData, newList])
    this.columnData.next(updatedData)
    localStorage.setItem('toDoList', JSON.stringify(updatedData))
  }
  deleteColumnData(remainingColumns: any) {
    this.columnData.next(remainingColumns);
    localStorage.setItem('toDoList', JSON.stringify(remainingColumns))
  }
  editedColumnData(editedListData: any) {
    debugger;
    this.columnData.next(editedListData)
    localStorage.setItem('toDoList', JSON.stringify(editedListData))
  }
};
