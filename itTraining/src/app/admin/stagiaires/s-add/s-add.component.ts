import { Router } from '@angular/router';
import { StagiairesService } from './../../../_services/stagiaires.service';
import { Stagiaire } from './../../../_interfaces/stagiaires';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s-add',
  templateUrl: './s-add.component.html',
  styleUrls: ['./s-add.component.css']
})
export class SAddComponent implements OnInit {

stagiaire:Stagiaire=new Stagiaire();

@ViewChild("mySpanStagiaire")
mySpanStagiaire!:ElementRef;
@ViewChild("myValidationEnregistrementStagiaire")
myValidationEnregistrementStagiaire!:ElementRef;

get nomStagiaire(){
  return this.formCreateStagiaire.get('nomStagiaire');
}

get prenomStagiaire(){
  return this.formCreateStagiaire.get('prenomStagiaire');
}
get emailStagiaire(){
  return this.formCreateStagiaire.get('emailStagiaire');
}
get telStagiaire(){
  return this.formCreateStagiaire.get('telStagiaire');
}
get adresseStagiaire(){
  return this.formCreateStagiaire.get('adresseStagiaire');
}

  constructor(private stagiairesService: StagiairesService, private router:Router) { }

  ngOnInit(): void {
  }
  saveStagiaire(){
    this.stagiairesService.CreateStagiaire(this.stagiaire).subscribe(data=>{
      console.log(data)
    })
  }


onSubmit(){
  if(this.formCreateStagiaire.valid){
    this.saveStagiaire();
    this.myValidationEnregistrementStagiaire.nativeElement.innerHTML="Un nouveau Stagiaire à bien été ajouter !";
  }
  else{
    this.mySpanStagiaire.nativeElement.innerHTML = 'SVP, champs obligatoires manquants !';
  }
}



formCreateStagiaire = new FormGroup({
  nomStagiaire:new FormControl('',[
    Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z\-]+$")
  ]),
  prenomStagiaire:new FormControl('',[
    Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z\-]+$")
  ]),
  emailStagiaire:new FormControl('',[
    Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]),
  telStagiaire:new FormControl('',[
    Validators.required,Validators.minLength(3)
  ]),
  adresseStagiaire:new FormControl('',[
    Validators.required,Validators.minLength(15)
  ])



  })
}
