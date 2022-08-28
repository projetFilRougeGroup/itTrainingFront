import { Enseignant } from './../../../_interfaces/enseignant';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EnseignantService } from 'src/app/_services/enseignant.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-e-add',
  templateUrl: './e-add.component.html',
  styleUrls: ['./e-add.component.css']
})
export class EAddComponent implements OnInit {

enseignant:Enseignant=new Enseignant();

@ViewChild("mySpann")
mySpann!:ElementRef;
@ViewChild("myValidationEnregistrementEnseignant")
myValidationEnregistrementEnseignant!:ElementRef;
get nomEnseignant(){
  return this.formCreateEnseignant.get('nomEnseignant');
}

get prenomEnseignant(){
  return this.formCreateEnseignant.get('prenomEnseignant');
}
get emailEnseignant(){
  return this.formCreateEnseignant.get('emailEnseignant');
}
get telEnseignant(){
  return this.formCreateEnseignant.get('telEnseignant');
}
get adresseEnseignant(){
  return this.formCreateEnseignant.get('adresseEnseignant');
}

  constructor(private enseignantService : EnseignantService, private router:Router) { }

  ngOnInit(): void {
  }
saveEnseignant(){
  this.enseignantService.CreateEnseignant(this.enseignant).subscribe(data=>{
    console.log(data)
  })
}

onSubmit(){
  if(this.formCreateEnseignant.valid){
    this.saveEnseignant();
    this.myValidationEnregistrementEnseignant.nativeElement.innerHTML="Un nouveau enseignant à bien été ajouter !";
  }
  else{
    this.mySpann.nativeElement.innerHTML = 'SVP, champs obligatoires manquants !';
  }
}


formCreateEnseignant = new FormGroup({
nomEnseignant:new FormControl('',[
  Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z\-]+$")
]),
prenomEnseignant:new FormControl('',[
  Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z\-]+$")
]),
emailEnseignant:new FormControl('',[
  Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
]),
telEnseignant:new FormControl('',[
  Validators.required,Validators.minLength(3)
]),
adresseEnseignant:new FormControl('',[
  Validators.required,Validators.minLength(15)
])



})























}
