import { FormationsComponent } from './formations/formations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { ListerFormationComponent } from './lister-formation/lister-formation.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { InfrastructuresEtCybersecuriteComponent } from './infrastructures-et-cybersecurite/infrastructures-et-cybersecurite.component';

const routes: Routes = [
  {path: "formations", component : FormationsComponent},
  {path: "add-formation", component : AddFormationComponent},
  {path: "lister-formation", component : ListerFormationComponent },
  {path: "apropos", component : AproposComponent },
  {path: "contactPublic", component : ContactPublicComponent },
  {path: "certifications", component: CertificationsComponent},
  {path:"infrastructuresSybersecurite", component:InfrastructuresEtCybersecuriteComponent},
  {path: "", redirectTo:"formations", pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
