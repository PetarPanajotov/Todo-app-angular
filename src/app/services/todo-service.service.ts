import { Injectable } from '@angular/core';
import { Category } from '../types/columnList';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  columnData = new BehaviorSubject([{
    id: '1',
    title: 'To-do',
    draggableItem: [{
      content: {
        name: 'Go to store',
        createdOn: '16 September'
      },
      effectAllowed: 'move',
      disable: false,
      handle: false
    }]
  },
  {
    id: '2',
    title: 'In Progress',
    draggableItem: [{
      content: {
        name: 'Go to store',
        createdOn: '16 September'
      },
      effectAllowed: 'move',
      disable: false,
      handle: false
    }]
  },
  {
    id: '3',
    title: 'Done',
    draggableItem: [{
      content: {
        name: 'Go to store',
        createdOn: '16 September'
      },
      effectAllowed: 'move',
      disable: false,
      handle: false
    }]
  }])
  setColumnData(newList:any) {
    const oldData = this.columnData.value
    this.columnData.next([...oldData, newList])
  }
}
