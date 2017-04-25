import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import { DataManagementComponent } from "./data-management.component";
import { VehiculeComponent } from "./vehicule/vehicule.component";
import { GroupComponent } from "./group/group.component";
import { DriverComponent } from "./driver/driver.component";
import { InterestPointComponent } from "./interest-point/interest-point.component";
 import { GroupFormComponent } from './group/group-form/group-form.component';
import { VehiculeFormComponent } from './vehicule/vehicule-form/vehicule-form.component';
import { DriverFormComponent } from './driver/driver-form/driver-form.component';

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
                                path: 'vehicule/add/:id',
                                component: VehiculeFormComponent
                            },
                            {
                                path: 'groupe',
                                component: GroupComponent
                            },
                            {
                                path: 'groupe/add/:id',
                                component: GroupFormComponent
                            },
                            {
                                path: 'driver',
                                component: DriverComponent
                            },
                            {
                                path: 'driver/add/:id',
                                component: DriverFormComponent
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
