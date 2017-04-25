import { Component, OnInit,Host } from '@angular/core';
import { DataManagementComponent } from "../data-management.component";
 import { VehiculeService } from '../providers/vehicule-service'
import { Router }   from '@angular/router';
import {Vehicule} from '../model/vehicule.class';
import {Groupe} from '../model/group.class';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
// pag vars
  public maxSize:number = 5;
  public bigTotalItems:number = 175;
  public bigCurrentPage:number = 1;
  public numPages:number = 0;
  itemsPerPage = 5;

  vehicules:Vehicule[]=[];

 constructor(@Host() parent: DataManagementComponent,private vehiculeService:VehiculeService,private router:Router) { 
  	parent.displayVehiculeIcon();
  }

  ngOnInit() {
    this.getListVehicules(this.bigCurrentPage-1,this.itemsPerPage);
  }

getListVehicules(page:number,size:number){
  
  this.vehiculeService.getVehiculesByPageAndSize(this.bigCurrentPage-1,this.itemsPerPage).subscribe(vehicules => {
  this.vehicules=vehicules.content;
  this.vehiculeService.vehicules=this.vehicules;
  this.bigTotalItems=vehicules.totalElements;

             });

}

    public pageChanged(event: any): void {
        this.bigCurrentPage = event.page;
        this.getListVehicules(this.bigCurrentPage - 1, this.itemsPerPage);
    }




    deleteVehicule($event : any){
   if($event.dragData!=null){

   let answer = confirm("Are you sure to delete this Vehicule with the matricule   '"+$event.dragData.matricule+"' from list?");  
   if (answer){
    
      this.delete($event.dragData);
    
    }

   }

else{
   let answer = confirm("Are you sure to delete this Groupe with the matricule  '"+$event.matricule+"' from list?");  
   if (answer){
    
      this.delete($event);
    
    }

   }
}


 delete(vehicule : any) {
 this.vehiculeService.deleteVehiculeById(vehicule.idVehicule).subscribe(suprimed =>{
if(suprimed){   
        this.getListVehicules(this.bigCurrentPage - 1, this.itemsPerPage);
 
  // this.groups.splice(this.groups.indexOf(group), 1);
            }

});

}


gotoDetail(idVehicule) {
  this.router.navigate(['/vehicule/details', idVehicule]);
}

}
