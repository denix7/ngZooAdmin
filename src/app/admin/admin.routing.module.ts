import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {MainComponent} from './components/main/main.component';
import {ListComponent} from './components/list/list.component';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';
//import { NgModel } from '@angular/forms/src/directives/ng_model';

//Configurador de rutas
const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'listado',
                pathMatch: 'full' 
            },
            {
                path: 'listado',
                component: ListComponent
            },
            {
                path: 'crear',
                component: AddComponent
            },
            {
                path: 'editar',
                component: EditComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)//para modulo funcional
    ],
    exports: [
        RouterModule//listo para importarlo 
    ]
})
export class AdminRoutingModule{}

