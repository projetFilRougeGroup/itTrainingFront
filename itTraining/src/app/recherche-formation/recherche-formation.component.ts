import { FormationService } from './../formation.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation';

@Component({
  selector: 'app-recherche-formation',
  templateUrl: './recherche-formation.component.html',
  styleUrls: ['./recherche-formation.component.css']
})
export class RechercheFormationComponent implements OnInit {

  FormationTrainings!:Formation[];
  filters = {
    keyword: ' '
  }
  constructor(private router:Router, private formationService:FormationService) { }

  ngOnInit(): void {
  }


rechercheFormation(idFormation?: number){
  this.router.navigate(['rechercheFormation',idFormation])
}
listFormations() {
  this.formationService.getFormationList().subscribe(
    data => this.FormationTrainings = this.filterFormations(data)
  )
}
filterFormations(FormationTrainings: Formation[]) {
  return FormationTrainings.filter((e) => {
    return ( (e.chaptersFormation?.toLowerCase().includes(this.filters.keyword.toLowerCase())) ||(e.detailsFormation?.toLowerCase().includes(this.filters.keyword.toLowerCase())) ||(e.nomFormation?.toLowerCase().includes(this.filters.keyword.toLowerCase())) ||(e.objectifsFormation?.toLowerCase().includes(this.filters.keyword.toLowerCase())) ||(e.publicFormation?.toLowerCase().includes(this.filters.keyword.toLowerCase())) || (e.referenceFormation?.toLowerCase().includes(this.filters.keyword.toLowerCase())));
  })
}
}
