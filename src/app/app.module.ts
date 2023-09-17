import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule,  } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './components/nav/nav.component';
import { ColumnContainerComponent } from './components/column-container/column-container.component';
import {DndModule} from 'ngx-drag-drop';
import { ColumnTitleComponent } from './components/column-title/column-title.component';
import { ColumnContentComponent } from './components/column-content/column-content.component';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { FormsModule } from "@angular/forms";
import { AutofocusDirective } from './directives/autofocus.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ColumnContainerComponent,
    ColumnTitleComponent,
    ColumnContentComponent,
    AutofocusDirective
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
