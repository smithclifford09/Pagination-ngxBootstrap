import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css']
})
export class DataManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
vehiculeIcon:Boolean=false;
groupeIcon:Boolean=false;
driverIcon:Boolean=false;
interesPointIcon:Boolean=false;

displayVehiculeIcon(){
this.vehiculeIcon=true;
this.groupeIcon=false;
this.driverIcon=false;
this.interesPointIcon=false;
}

displayGroupeIcon(){
this.vehiculeIcon=false;
this.groupeIcon=true;
this.driverIcon=false;
this.interesPointIcon=false;
}

displayDriverIcon(){
this.vehiculeIcon=false;
this.groupeIcon=false;
this.driverIcon=true;
this.interesPointIcon=false;
}

displayInterestPointIcon(){
this.vehiculeIcon=false;
this.groupeIcon=false;
this.driverIcon=false;
this.interesPointIcon=true;
}


}
