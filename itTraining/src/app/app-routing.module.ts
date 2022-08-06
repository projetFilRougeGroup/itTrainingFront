import { FormationsComponent } from './formations/formations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { InfrastructuresEtCybersecuriteComponent } from './infrastructures-et-cybersecurite/infrastructures-et-cybersecurite.component';
import { InfosPratiquesComponent } from './infos-pratiques/infos-pratiques.component';

const routes: Routes = [
  {path: "formations", component : FormationsComponent},
  {path: "apropos", component : AproposComponent },
  {path: "contactPublic", component : ContactPublicComponent },
  {path: "certifications", component: CertificationsComponent},
  {path:"infrastructuresSybersecurite", component:InfrastructuresEtCybersecuriteComponent},
  {path:"infosPratiques", component:InfosPratiquesComponent},
  {path: "", redirectTo:"formations", pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
