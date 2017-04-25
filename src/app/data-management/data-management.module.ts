import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { GroupService } from './providers/group-service'
import { VehiculeService } from './providers/vehicule-service'
import { DriverService } from './providers/driver-service'
import { CommonModule } from '@angular/common';
import { DataManagementComponent } from "./data-management.component";
import { GroupComponent } from './group/group.component';
import { DriverComponent } from './driver/driver.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { InterestPointComponent } from './interest-point/interest-point.component';
import { DataManagementRoutingModule } from "./data-management-routing.module"
import {DndModule} from 'ng2-dnd';
import { GroupFormComponent } from './group/group-form/group-form.component';
import {TagInputModule} from "ng2-tag-input";
import { VehiculeFormComponent } from './vehicule/vehicule-form/vehicule-form.component';
import { DriverFormComponent } from './driver/driver-form/driver-form.component';

@NgModule({
  imports: [
  PaginationModule.forRoot(),
  BrowserModule,
  FormsModule,
    CommonModule,
    DataManagementRoutingModule,
        DndModule.forRoot(),
        TagInputModule
  ],
  declarations: [DataManagementComponent,GroupComponent, DriverComponent, VehiculeComponent, InterestPointComponent, GroupFormComponent, VehiculeFormComponent, DriverFormComponent],
  providers: [VehiculeService,GroupService,DriverService]
})
export class DataManagementModule { }
