import { Component, OnInit,Host } from '@angular/core';
import { DataManagementComponent } from "../data-management.component";

@Component({
  selector: 'app-interest-point',
  templateUrl: './interest-point.component.html',
  styleUrls: ['./interest-point.component.css']
})
export class InterestPointComponent implements OnInit {

  constructor(@Host() parent: DataManagementComponent) { 
  	parent.displayInterestPointIcon();
  }

  ngOnInit() {
  }

}
