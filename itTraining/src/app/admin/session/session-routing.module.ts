import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionDeleteComponent } from './session-delete/session-delete.component';
import { SessionAddComponent } from './session-add/session-add.component';
import { SessionEditComponent } from './session-edit/session-edit.component';
import { SessionIndexComponent } from './session-index/session-index.component';

const routes: Routes = [
  {path:'', component:SessionIndexComponent},
  {path:'edit/:id',component:SessionEditComponent},
  {path:'add', component:SessionAddComponent},
  {path:'delete/:id',component:SessionDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
