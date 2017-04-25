import { Component, OnInit ,Input ,AfterViewInit  } from '@angular/core';
 import { VehiculeService } from '../../providers/vehicule-service'
import {FormsModule} from "@angular/forms";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Vehicule} from '../../model/vehicule.class';
import {Groupe} from '../../model/group.class';
@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrls: ['./vehicule-form.component.css']
})
export class VehiculeFormComponent implements OnInit {

listIdsSelected=[];
// vehiculesDtoMatricule:VehiculeGetDTO[]=[] ;
matricule : string ="nom du vehicule";

mark : string ="mark";

GroupsLabelToSelect:GroupGetDTO[] = [];

vehiculeGroups:GroupGetDTO[] = [];

vehiculeToCreate:VehiculeSendDTOWithoutId;

vehiculeUpdateDTO:VehiculeSendDTOWithId;

vehicule:Vehicule=null;

mode:number = 0;

show:Boolean=false;

maxItems:number=0;

  constructor(
  private vehiculeService:VehiculeService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
  




this.route.params.subscribe(params => {
this.mode = +params['id'];


if(this.mode >= 0){

this.getGroupesLabel();


 if(this.mode > 0){

         this.vehicule = this.vehiculeService.getVehicule(this.mode);
           this.vehiculeService.getLisatDTOById(this.mode)
    .subscribe(vehiculeGroups => {this.vehiculeGroups = vehiculeGroups;

for(let i = 0;i<this.vehiculeGroups.length;i++){
         
        this.listIdsSelected.push(this.vehiculeGroups[i].idGroupe);
        }

     });
                }
}

else{


       this.vehicule = this.vehiculeService.getVehicule(this.mode);
           this.vehiculeService.getLisatDTOById(-this.mode)
    .subscribe(vehiculeGroups => {this.vehiculeGroups = vehiculeGroups;
    this.show=true;
    this.vehicule = this.vehiculeService.getVehicule(-this.mode);
       
        for(let i = 0;i<this.vehiculeGroups.length;i++){
                this.listIdsSelected.push(this.vehiculeGroups[i].idGroupe);       
        }
        this.maxItems=this.listIdsSelected.length;
     });
}
});
  }

  

addVehicule(){
  if(this.listIdsSelected.length==0){
  this.listIdsSelected.push(1);
}
this.vehiculeToCreate = new VehiculeSendDTOWithoutId(this.matricule,this.mark,this.listIdsSelected);
console.log(this.vehiculeToCreate);
this.vehiculeService.sendVehiculeDTOWithoutId(this.vehiculeToCreate).subscribe(response => {
if(response){
this.goBack();
}             });
}


updateVehicule(){
if(this.listIdsSelected.length==0){
  this.listIdsSelected.push(1);
}

  this.vehiculeUpdateDTO = new VehiculeSendDTOWithId(this.vehicule.matricule,
  	this.vehicule.mark,this.listIdsSelected,
    this.vehicule.idVehicule);
this.vehiculeService.putVehiculeDTO(this.vehiculeUpdateDTO).subscribe(response => {
if(response){
this.goBack();
}

             });
}

   
   getGroupesLabel(){
   	this.vehiculeService.getGroupsLabel().subscribe(getGroupsLabel => {
  this.GroupsLabelToSelect=getGroupsLabel;
             });
   }

onItemAdded($event){
  console.log($event);
  this.listIdsSelected.push($event.idGroupe);
}

goBack(): void {
  this.location.back();
}


}



class GroupGetDTO {
   public idGroupe: number;
   public nom:String
    constructor(idGroupe: number,nom:String) {
        this.idGroupe = idGroupe;    
        this.nom=  nom;
    }

}



class VehiculeSendDTOWithoutId{
   public matricule: string;
   public mark: string;
   public idGroups:any;
    constructor(matricule: string,mark: string,idGroups:any) {
        this.matricule = matricule; 
        this.mark = mark; 
        this .idGroups = idGroups;
    }
}

class VehiculeSendDTOWithId{
   public matricule: string;
   public mark: string;
   public idGroups:any;
   public idVehicule:number;
    constructor(matricule: string,mark: string,idGroups:any,idVehicule : number) {
        this.matricule = matricule; 
        this.mark = mark; 
        this .idGroups = idGroups;
        this .idVehicule = idVehicule;
    }
}

