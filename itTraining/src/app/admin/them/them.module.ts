import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemIndexComponent } from './them-index/them-index.component';
import { ThemEditComponent } from './them-edit/them-edit.component';
import { ThemDeleteComponent } from './them-delete/them-delete.component';
import { ThemAddComponent } from './them-add/them-add.component';
import { ThemRoutingModule } from './them-routing.module';



@NgModule({
  declarations: [
    ThemIndexComponent,
    ThemEditComponent,
    ThemDeleteComponent,
    ThemAddComponent
  ],
  imports: [
    CommonModule,
    ThemRoutingModule,
    ReactiveFormsModule
  ]
})
export class ThemModule { }
