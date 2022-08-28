import { RechercheFormationComponent } from './recherche-formation/recherche-formation.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ErrorComponent } from './_utils/error/error.component';
import { FormationsComponent } from './formations/formations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ContactPublicComponent } from './contact-public/contact-public.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { InfrastructuresEtCybersecuriteComponent } from './infrastructures-et-cybersecurite/infrastructures-et-cybersecurite.component';
import { InfosPratiquesComponent } from './infos-pratiques/infos-pratiques.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import {CreateStagiaireComponent} from './create-stagiaire/create-stagiaire.component';
const routes: Routes = [
  {path: "formations", component : FormationsComponent},
  {path: "apropos", component : AproposComponent },
  {path: "contactPublic", component : ContactPublicComponent },
  {path: "certifications", component: CertificationsComponent},
  {path:"infrastructuresSybersecurite", component:InfrastructuresEtCybersecuriteComponent},
  {path:"infosPratiques", component:InfosPratiquesComponent},
  {path:"FormationListComponent", component:FormationListComponent},
  {path:"CreateStagiaireComponent", component:CreateStagiaireComponent},
  {path:"formation-details/:idFormation", component:FormationDetailsComponent},
  {path: "", redirectTo:"formations", pathMatch:"full" },
  {path:"rechercheFormation", component:RechercheFormationComponent},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},

  {path:'**', component:ErrorComponent}  // page d'erreur si aucun lien n'est valide


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
