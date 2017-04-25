import { Component, OnInit ,Input ,AfterViewInit  } from '@angular/core';
 import { DriverService } from '../../providers/driver-service'
import {FormsModule} from "@angular/forms";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Vehicule} from '../../model/vehicule.class';
import {Groupe} from '../../model/group.class';
import {Driver} from '../../model/driver.class';




@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
listIdsSelected=[];
// vehiculesDtoMatricule:VehiculeGetDTO[]=[] ;
firstName : string ="prenom du chauffeur";
lastName : string ="nom du chauffeur";
telephone : string ="telephone";
code : number=0;
cin : string ="cin";
email : string ="email";
driven : boolean;

vehiculesMatricule:VehiculeGetDTO[] = [];

vehiculeMatricule:VehiculeGetDTO[] = [];

driver:Driver=null;

mode:number = 0;

show:Boolean=false;

maxItems:number=1;

driveradd:Driver;

idSelected : number = null;

  constructor(
  private driverService:DriverService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
  



this.route.params.subscribe(params => {
this.mode = +params['id'];
if(this.mode >=0){

   this.driverService.getVehiculesMatricules()
    .subscribe(matricules => this.vehiculesMatricule  = matricules );
    
 if(this.mode > 0){

         this.driver = this.driverService.getDriver(this.mode);
         

     this.driverService.getVehiculeMatricule(this.driver.idDriver)
    .subscribe(vehiculeMatricule => {
      if(vehiculeMatricule!=null){
      this.vehiculeMatricule.push(vehiculeMatricule);
      this.idSelected=this.vehiculeMatricule[0].idVehicule;
       }

}
);
  


                }

}
else{
    this.show=true;
this.maxItems=0;

       this.driver = this.driverService.getDriver(-this.mode);
       
          this.driverService.getVehiculeMatricule(this.driver.idDriver)
      
    .subscribe(vehiculeMatricule => {
      if(vehiculeMatricule!=null){
      this.vehiculesMatricule.push(vehiculeMatricule);
       }

}
) ;

 }

  } );
}

  

addDriver(){
if(this.idSelected == null){
	this.idSelected = 0;
}

this.driveradd = new Driver(this.code,this.firstName,
	this.lastName,this.telephone,this.cin,this.email);

 
this.driverService.addDriver(this.driveradd,this.idSelected).subscribe(response => {
if(response){
this.goBack();
}             });
}






updateDriver(){
	if(this.vehiculeMatricule.length != 0){
	if(this.idSelected == this.vehiculesMatricule[0].idVehicule){
this.idSelected = 0;
	}
}

	if(this.idSelected == null){
		this.idSelected = 0;
	}


console.log(this.driver+' | '+this.idSelected);
this.driverService.putDriver(this.driver,this.idSelected).subscribe(response => {
if(response){
this.goBack();
}

             });
}







onItemAdded($event){
  this.idSelected = $event.idVehicule;
}
onItemRemoved($event){
  this.idSelected=null;
}
goBack(): void {
  this.location.back();
}


}




class VehiculeGetDTO {
   public idVehicule: number;
   public matricule:String
    constructor(idVehicule: number,matricule:String) {
        this.idVehicule = idVehicule;    
        this.matricule=  matricule;
    }

}
