import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';

import { FormsModule } from '@angular/forms';
import { EIndexComponent } from './e-index/e-index.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EAddComponent } from './e-add/e-add.component';
import { EDeleteComponent } from './e-delete/e-delete.component';


@NgModule({
  declarations: [
    EIndexComponent,
    EEditComponent,
    EAddComponent,
    EDeleteComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FormsModule
  ]
})
export class EnseignantModule { }
