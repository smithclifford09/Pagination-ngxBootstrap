import { Component, OnInit,Host } from '@angular/core';
import { DataManagementComponent } from "../data-management.component";
 import { DataServiceService } from '../providers/data-service.service'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  
})
export class GroupComponent implements OnInit {

  
  public maxSize:number = 5;
  public bigTotalItems:number = 175;
  public bigCurrentPage:number = 1;
  public numPages:number = 0;
  itemsPerPage = 5;

  groups:Groupe[]=[];

 constructor(@Host() parent: DataManagementComponent,private groupeService:DataServiceService) { 
  	parent.displayGroupeIcon();
  }

  ngOnInit() {
    this.getListGroups(this.bigCurrentPage-1,this.itemsPerPage);
  }

 
  // public pageChanged(event:any):void {
  //   console.log('Page changed to: ' + event.page);
  //   console.log('Number items per page: ' + event.itemsPerPage);
  // }

getListGroups(page:number,size:number){
  
  this.groupeService.getGroupsByPageAndSize(this.bigCurrentPage-1,this.itemsPerPage).subscribe(groups => {
  this.groups=groups.content;
  this.bigTotalItems=groups.totalElements;
             });

}



    public pageChanged(event: any): void {
        this.bigCurrentPage = event.page;
        this.getListGroups(this.bigCurrentPage - 1, this.itemsPerPage);
    };

}



class Groupe {
   public groupeId: Number;
    public nom : String;

    constructor(groupeId: Number,nom : String) {
        this.groupeId = groupeId;      
        this.nom = nom;
    }

}
