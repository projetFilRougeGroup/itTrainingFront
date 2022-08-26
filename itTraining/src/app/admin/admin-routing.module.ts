import { DashboardComponent } from './dashboard/dashboard.component';
import { AlayoutComponent } from './alayout/alayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:AlayoutComponent,children:[
    {path:'', redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
    {path:'formation',loadChildren:()=>import('./formation/formation.module').then(m=>m.FormationModule)},
    {path:'enseignant',loadChildren:()=>import('./enseignant/enseignant.module').then(m=>m.EnseignantModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
