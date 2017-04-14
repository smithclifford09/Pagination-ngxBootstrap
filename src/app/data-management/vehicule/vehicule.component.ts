import { Component, OnInit,Host } from '@angular/core';
import { DataManagementComponent } from "../data-management.component";

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  constructor(@Host() parent: DataManagementComponent) { 
  	parent.displayVehiculeIcon();
  }

  ngOnInit() {
  	
  }

}
