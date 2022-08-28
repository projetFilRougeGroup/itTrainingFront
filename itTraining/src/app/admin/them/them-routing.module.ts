import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemDeleteComponent } from './them-delete/them-delete.component';
import { ThemAddComponent } from './them-add/them-add.component';
import { ThemEditComponent } from './them-edit/them-edit.component';
import { ThemIndexComponent } from './them-index/them-index.component';

const routes: Routes = [
  {path:'', component:ThemIndexComponent},
  {path:'edit/:id',component:ThemEditComponent},
  {path:'add', component:ThemAddComponent},
  {path:'delete/:id',component:ThemDeleteComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemRoutingModule { }
