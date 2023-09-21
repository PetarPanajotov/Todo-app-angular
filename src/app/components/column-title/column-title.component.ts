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

  onBlur(): void {
    this.titleEdit = false;
    this.editedTitle.emit({title: this.title, id: this.id})
  };

}
