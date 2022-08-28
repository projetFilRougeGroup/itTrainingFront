import { SAddComponent } from './s-add/s-add.component';
import { SDeleteComponent } from './s-delete/s-delete.component';
import { SEditComponent } from './s-edit/s-edit.component';
import { SIndexComponent } from './s-index/s-index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StagiairesRoutingModule } from './stagiaires-routing.module';


@NgModule({
  declarations: [
    SIndexComponent,
    SEditComponent,
    SDeleteComponent,
    SAddComponent
  ],
  imports: [
    CommonModule,
    StagiairesRoutingModule,
    ReactiveFormsModule
  ]
})
export class StagiairesModule { }
