import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EIndexComponent } from './e-index/e-index.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EAddComponent } from './e-add/e-add.component';
import { EDeleteComponent } from './e-delete/e-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';


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
    ReactiveFormsModule,
  ]
})
export class EnseignantModule { }
