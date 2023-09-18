import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule,  } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './components/nav/nav.component';
import { ContainerComponent } from './components/container/container.component'
import {DndModule} from 'ngx-drag-drop';
import { ColumnTitleComponent } from './components/column-title/column-title.component';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { FormsModule } from "@angular/forms";
import { AutofocusDirective } from './directives/autofocus.directive';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { CardBtnComponent } from './components/card-btn/card-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    ColumnTitleComponent,
    AutofocusDirective,
    TaskCardComponent,
    CardBtnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DndModule,
    AutoSizeInputModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
