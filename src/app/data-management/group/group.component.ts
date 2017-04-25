import { Component, OnInit,Host } from '@angular/core';
import { DataManagementComponent } from "../data-management.component";
 import { GroupService } from '../providers/group-service'
import { Router }   from '@angular/router';
import {Vehicule} from '../model/vehicule.class';
import {Groupe} from '../model/group.class';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  
})
export class GroupComponent implements OnInit {

  // pag vars
  public maxSize:number = 5;
  public bigTotalItems:number = 175;
  public bigCurrentPage:number = 1;
  public numPages:number = 0;
  itemsPerPage = 5;

  groups:Groupe[]=[];

 constructor(@Host() parent: DataManagementComponent,private groupeService:GroupService,private router:Router) { 
  	parent.displayGroupeIcon();
  }

  ngOnInit() {
    this.getListGroups(this.bigCurrentPage-1,this.itemsPerPage);
  }

getListGroups(page:number,size:number){
  
  this.groupeService.getGroupsByPageAndSize(this.bigCurrentPage-1,this.itemsPerPage).subscribe(groups => {
  this.groups=groups.content;
  this.groupeService.groups=this.groups;
  this.bigTotalItems=groups.totalElements;
             });

}

    public pageChanged(event: any): void {
        this.bigCurrentPage = event.page;
        this.getListGroups(this.bigCurrentPage - 1, this.itemsPerPage);
    }




    deleteGroupe($event : any){
   if($event.dragData!=null){

   let answer = confirm("Are you sure to delete this Groupe with the name  '"+$event.dragData.nom+"' from list?");  
   if (answer){
    
      this.delete($event.dragData);
    
    }

   }

else{
   let answer = confirm("Are you sure to delete this Groupe with the name  '"+$event.nom+"' from list?");  
   if (answer){
    
      this.delete($event);
    
    }

   }
}


 delete(group : any) {
 this.groupeService.deleteGroupById(group.idGroupe).subscribe(suprimed =>{
if(suprimed){   
        this.getListGroups(this.bigCurrentPage - 1, this.itemsPerPage);
 
  // this.groups.splice(this.groups.indexOf(group), 1);
            }

});

}


gotoDetail(idGroup) {
  this.router.navigate(['/groupe/details', idGroup]);
}

}









