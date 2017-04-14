import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from './providers/data-service.service'
import { CommonModule } from '@angular/common';
import { DataManagementComponent } from "./data-management.component";
import { GroupComponent } from './group/group.component';
import { DriverComponent } from './driver/driver.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { InterestPointComponent } from './interest-point/interest-point.component';
import { DataManagementRoutingModule } from "./data-management-routing.module"

@NgModule({
  imports: [
  PaginationModule.forRoot(),
  BrowserModule,
  FormsModule,
    CommonModule,
    DataManagementRoutingModule
  ],
  declarations: [DataManagementComponent,GroupComponent, DriverComponent, VehiculeComponent, InterestPointComponent],
  providers: [DataServiceService]
})
export class DataManagementModule { }
