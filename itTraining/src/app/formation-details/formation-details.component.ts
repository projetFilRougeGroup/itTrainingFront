import { Component, OnInit } from '@angular/core';
import {Formation} from '../formation';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

  idFormation!: number;
  formation!:Formation;

  constructor(private route:ActivatedRoute, private formationService:FormationService) { }

  ngOnInit(): void {
    this.idFormation=this.route.snapshot.params['idFormation'];

    this.formation=new Formation();
    this.formationService.getFormationById(this.idFormation).subscribe(data=>{
      this.formation=data;
    });
  }

}
