import { Component, OnInit ,Input ,AfterViewInit  } from '@angular/core';
 import { GroupService } from '../../providers/group-service'
import {FormsModule} from "@angular/forms";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Vehicule} from '../../model/vehicule.class';
import {Groupe} from '../../model/group.class';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit{

listIdsSelected=[];
// vehiculesDtoMatricule:VehiculeGetDTO[]=[] ;
name : string ="nom du groupe";

VehiculeToSelect:VehiculeGetDTO[] = [];

GroupVehicules:VehiculeGetDTO[] = [];

vehiculesToSend:VehiculeSendDTO;

groupsToSend:GroupSendDTO;

group:Groupe=null;

mode:number = 0;

show:Boolean=false;
maxItems:number=0;

  constructor(
  private groupeService:GroupService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {

this.route.params.subscribe(params => {
this.mode = +params['id'];


if(this.mode >= 0){

this.getVehicules();
 if(this.mode > 0){
         this.group = this.groupeService.getGroup(this.mode);
        for(let i = 0;i<this.group.vehicules.length;i++){
          this.GroupVehicules.push(new VehiculeGetDTO(
          this.group.vehicules[i].idVehicule,this.group.vehicules[i].matricule));
        this.listIdsSelected.push(this.group.vehicules[i].idVehicule);
        }

                }
}

else{
  this.show=true;
    this.group = this.groupeService.getGroup(-this.mode);
        for(let i = 0;i<this.group.vehicules.length;i++){
          this.GroupVehicules.push(new VehiculeGetDTO(
          this.group.vehicules[i].idVehicule,this.group.vehicules[i].matricule));
        this.listIdsSelected.push(this.group.vehicules[i].idVehicule);
        
        }
        this.maxItems=this.listIdsSelected.length;
}


});

  }

  

addGroup(){
this.vehiculesToSend = new VehiculeSendDTO(this.name,this.listIdsSelected);
this.groupeService.sendVehiculesDTO(this.vehiculesToSend).subscribe(response => {
if(response){
this.goBack();
}             });
}


updateGroup(){
  this.groupsToSend = new GroupSendDTO(this.group.nom,this.listIdsSelected,
    this.group.idGroupe,this.group.imageUrl);
this.groupeService.putGroupDTO(this.groupsToSend).subscribe(response => {
if(response){
this.goBack();
}

             });
}

   
   getVehicules(){
   	this.groupeService.getVehiculesMatricules().subscribe(vehiculesDtoMatricule => {
  this.VehiculeToSelect=vehiculesDtoMatricule;
             });
   }

onItemAdded($event){
  this.listIdsSelected.push($event.idVehicule);
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



class VehiculeSendDTO{
   public name: string;
   public idVehicules:any;
    constructor(name: string,idVehicules:any) {
        this.name = name; 
        this .idVehicules = idVehicules;
    }
}

class GroupSendDTO{
   public name: string;
  public imageUrl : string;
  public idGroupe: number;
   public idVehicules:any;
    constructor(name: string,idVehicules:any,idGroupe:number,imageUrl:string) {
        this.name = name; 
        this .idVehicules = idVehicules;
        this.imageUrl = imageUrl;
        this.idGroupe= idGroupe;
    }
}

