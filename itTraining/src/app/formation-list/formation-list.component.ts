import { Component, OnInit } from '@angular/core';
import {Formation} from '../formation';
import { FormationService } from '../formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  FormationTrainings!: Formation[];

  constructor(private formationService:FormationService, private router:Router) {
}

  ngOnInit(): void {
    this.getFormations();
  }
  private getFormations(){
    this.formationService.getFormationList().subscribe(data=>{
      this.FormationTrainings=data;
    });
  }
  formationDetails(idFormation?: number){
    this.router.navigate(['formation-details',idFormation])
  }

}
