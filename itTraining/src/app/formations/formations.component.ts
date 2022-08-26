import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FormationService } from '../formation.service';
import { Formation } from '../formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {


  FormationTrainings!: Formation[];

  newsletterForm!:FormControl;

  filters = {
    keyword: ''
  }

  constructor(private formationService:FormationService, private router:Router) { }

  ngOnInit(): void {
    this.newsletterForm = new FormControl('',[
Validators.required, Validators.email
    ]);
    this.getFormations();
  }

  subscribe():void {
    if(this.newsletterForm.valid){
    console.log(this.newsletterForm.value);
  }
  }
  private getFormations(){
    this.formationService.getFormationList().subscribe(data=>{
      this.FormationTrainings=data;
    });

}

}
