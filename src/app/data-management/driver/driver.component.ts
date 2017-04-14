import { Component, OnInit,Host } from '@angular/core';
import { DataManagementComponent } from "../data-management.component";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

constructor(@Host() parent: DataManagementComponent) { 
  	parent.displayDriverIcon();
  }

  ngOnInit() {
  }

}
