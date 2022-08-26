import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FIndexComponent } from './f-index/f-index.component';
import { FEditComponent } from './f-edit/f-edit.component';
import { FAddComponent } from './f-add/f-add.component';
import { FDeleteComponent } from './f-delete/f-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FIndexComponent,
    FEditComponent,
    FAddComponent,
    FDeleteComponent
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FormsModule
  ]
})
export class FormationModule { }
