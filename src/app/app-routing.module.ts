import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'data',
                loadChildren: 'app/data-management/data-management.module#DataManagementModule'
            }           
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}