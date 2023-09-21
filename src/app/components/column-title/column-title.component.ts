import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-column-title',
  templateUrl: './column-title.component.html',
  styleUrls: ['./column-title.component.sass']
})
export class ColumnTitleComponent {
  @Input() title: string | undefined;
  @Input() id: string | undefined;
  @Output() editedTitle = new EventEmitter<any>();
  titleEdit: boolean = false;

  onClick(): void {
    this.titleEdit = true;
  };

  onTitleEdit(): void {
    this.titleEdit = false;
    this.editedTitle.emit({method: 'Edit', title: this.title, id: this.id})
  };
  onTitleDelete(): void {
    this.editedTitle.emit({method: 'Delete', title: this.title, id: this.id})
  };
};
