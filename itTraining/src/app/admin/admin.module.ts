import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AheaderComponent } from './aheader/aheader.component';

import { EIndexComponent } from './enseignant/e-index/e-index.component';
import { EAddComponent } from './enseignant/e-add/e-add.component';
import { EDeleteComponent } from './enseignant/e-delete/e-delete.component';
import { EEditComponent } from './enseignant/e-edit/e-edit.component';


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    SidemenuComponent,
    AheaderComponent,
    EIndexComponent,
    EAddComponent,
    EDeleteComponent,
    EEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
