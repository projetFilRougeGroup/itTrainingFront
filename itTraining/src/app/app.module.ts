import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { ListerFormationComponent } from './lister-formation/lister-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    AddFormationComponent,
    ListerFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
