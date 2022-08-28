import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionDeleteComponent } from './session-delete/session-delete.component';
import { SessionAddComponent } from './session-add/session-add.component';
import { SessionEditComponent } from './session-edit/session-edit.component';
import { SessionIndexComponent } from './session-index/session-index.component';
import { SessionRoutingModule } from './session-routing.module';



@NgModule({
  declarations: [
    SessionIndexComponent,
    SessionEditComponent,
    SessionAddComponent,
    SessionDeleteComponent
  ],
  imports: [
    CommonModule, SessionRoutingModule,ReactiveFormsModule
  ]
})
export class SessionModule { }
