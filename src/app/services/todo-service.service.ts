import { Injectable } from '@angular/core';
import { Category } from '../types/task-management.models';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  columnData = new BehaviorSubject<Category[]>([{
    id: '1',
    title: 'To-do',
    draggableItem: [{
      content: {
        name: 'Go to Cinema',
        createdOn: '16 September'
      }
    }]
  },
  {
    id: '2',
    title: 'In Progress',
    draggableItem: [{
      content: {
        name: 'Go to sSchool',
        createdOn: '16 September'
      }
    }]
  },
  {
    id: '3',
    title: 'Done',
    draggableItem: [{
      content: {
        name: 'Go to store',
        createdOn: '16 September'
      }
    }]
  }])

  setColumnData(newList:any) {
    const oldData = this.columnData.value
    this.columnData.next([...oldData, newList])
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
