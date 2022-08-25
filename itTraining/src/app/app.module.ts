import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { InfrastructuresEtCybersecuriteComponent } from './infrastructures-et-cybersecurite/infrastructures-et-cybersecurite.component';
import { InfosPratiquesComponent } from './infos-pratiques/infos-pratiques.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { CreateStagiaireComponent } from './create-stagiaire/create-stagiaire.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErrorComponent } from './_utils/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    AproposComponent,
    ContactPublicComponent,
    CertificationsComponent,
    InfrastructuresEtCybersecuriteComponent,
    InfosPratiquesComponent,
    FormationListComponent,
    FormationDetailsComponent,
    CreateStagiaireComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
