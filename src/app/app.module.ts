import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavComponent } from './components/nav/nav.component';
import { ContainerComponent } from './components/container/container.component'
import {DndModule} from 'ngx-drag-drop';
import { ColumnTitleComponent } from './components/column-title/column-title.component';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutofocusDirective } from './directives/autofocus.directive';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { CardBtnComponent } from './components/card-btn/card-btn.component';
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component';
import { CreateEditModalComponent } from './components/create-edit-modal/create-edit-modal.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    ColumnTitleComponent,
    AutofocusDirective,
    TaskCardComponent,
    CardBtnComponent,
    AddNewTaskComponent,
    CreateEditModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DndModule,
    AutoSizeInputModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
