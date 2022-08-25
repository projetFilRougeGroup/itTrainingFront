import { FDeleteComponent } from './f-delete/f-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAddComponent } from './f-add/f-add.component';
import { FEditComponent } from './f-edit/f-edit.component';
import { FIndexComponent } from './f-index/f-index.component';

const routes: Routes = [
  {path:'', component:FIndexComponent},
  {path:'edit/:id',component:FEditComponent},
  {path:'add', component:FAddComponent},
  {path:'delete/:id',component:FDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
