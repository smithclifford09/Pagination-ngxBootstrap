import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import { DataManagementComponent } from "./data-management.component";
import { VehiculeComponent } from "./vehicule/vehicule.component";
import { GroupComponent } from "./group/group.component";
import { DriverComponent } from "./driver/driver.component";
import { InterestPointComponent } from "./interest-point/interest-point.component";
 
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DataManagementComponent,
                children: [
                    {
                        path: '',
                        children: [
                            {
                                path: 'vehicule',
                                component: VehiculeComponent
                            },
                            {
                                path: 'groupe',
                                component: GroupComponent
                            },
                            {
                                path: 'driver',
                                component: DriverComponent
                            },{
                                path:'interestPoint',
                                component: InterestPointComponent
                            }
                            ,{path: '', redirectTo: 'vehicule',pathMatch:'full'}
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class DataManagementRoutingModule {
}
