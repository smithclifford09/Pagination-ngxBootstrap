import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import { PaginationModule } from 'ngx-bootstrap';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { DataManagementModule } from './data-management/data-management.module';

import {TagInputModule} from "ng2-tag-input";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   PaginationModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataManagementModule,
    DndModule.forRoot(),
    TagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
