import { Component, OnInit,Host } from '@angular/core';
import { DataManagementComponent } from "../data-management.component";
 import { DriverService } from '../providers/driver-service'
import { Router }   from '@angular/router';
import {Vehicule} from '../model/vehicule.class';
import {Driver} from '../model/driver.class';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
// pag vars
  public maxSize:number = 5;
  public bigTotalItems:number = 175;
  public bigCurrentPage:number = 1;
  public numPages:number = 0;
  itemsPerPage = 5;

  drivers:Driver[]=[];

 constructor(@Host() parent: DataManagementComponent,private driverService:DriverService,private router:Router) { 
  	parent.displayDriverIcon();
  }

  ngOnInit() {
   
    this.getListDrivers(this.bigCurrentPage-1,this.itemsPerPage);
    
  }

getListDrivers(page:number,size:number){
  
  this.driverService.getDriversByPageAndSize(this.bigCurrentPage-1,this.itemsPerPage).subscribe(drivers => {
  

  this.drivers=drivers.content;

  this.driverService.drivers=this.drivers;
  this.bigTotalItems=drivers.totalElements;
             });

}

    public pageChanged(event: any): void {
        this.bigCurrentPage = event.page;
        this.getListDrivers(this.bigCurrentPage - 1, this.itemsPerPage);
    }




    deleteDriver($event : any){
   if($event.dragData!=null){

   let answer = confirm("Are you sure to delete this Driver with the name  '"+$event.dragData.lastName+"' from list?");  
   if (answer){
    
      this.delete($event.dragData);
    
    }

   }

else{
   let answer = confirm("Are you sure to delete this Driver with the name  '"+$event.lastName+"' from list?");  
   if (answer){
    
      this.delete($event);
    
    }

   }
}


 delete(driver : any) {
 this.driverService.deleteDriverById(driver.idDriver).subscribe(suprimed =>{
if(suprimed){   
        this.getListDrivers(this.bigCurrentPage - 1, this.itemsPerPage);
             }

});

}

}

