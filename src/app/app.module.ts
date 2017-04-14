import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import { PaginationModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { DataManagementModule } from './data-management/data-management.module';

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
    DataManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
