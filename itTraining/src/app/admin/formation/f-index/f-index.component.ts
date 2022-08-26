import { Formations } from './../../../_interfaces/formations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationsService } from 'src/app/_services/formations.service';

@Component({
  selector: 'app-f-index',
  templateUrl: './f-index.component.html',
  styleUrls: ['./f-index.component.css']
})
export class FIndexComponent implements OnInit {
  formationList!: Formations[];

  constructor(private formationsService: FormationsService, private router:Router) { }

  ngOnInit(): void {
    this.getFormations();
  }


  private getFormations(){
    this.formationsService.getAllFormations().subscribe((data:any)=>{
      this.formationList=data
    });
  }
  // formationDetails(idFormation?: number){
  //   this.router.navigate(['formation-details',idFormation])
  // }


}
