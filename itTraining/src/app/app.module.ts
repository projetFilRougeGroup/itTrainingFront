import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { InfrastructuresEtCybersecuriteComponent } from './infrastructures-et-cybersecurite/infrastructures-et-cybersecurite.component';
import { InfosPratiquesComponent } from './infos-pratiques/infos-pratiques.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    AproposComponent,
    ContactPublicComponent,
    CertificationsComponent,
    InfrastructuresEtCybersecuriteComponent,
    InfosPratiquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
