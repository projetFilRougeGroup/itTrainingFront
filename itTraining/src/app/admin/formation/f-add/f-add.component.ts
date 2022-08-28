import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Formations } from 'src/app/_interfaces/formations';
import { FormationsService } from 'src/app/_services/formations.service';

@Component({
  selector: 'app-f-add',
  templateUrl: './f-add.component.html',
  styleUrls: ['./f-add.component.css']
})
export class FAddComponent implements OnInit {

formation:Formations=new Formations();


@ViewChild("mySpanFormation")
mySpanFormation!:ElementRef;
@ViewChild("myValidationEnregistrementFormation")
myValidationEnregistrementFormation!:ElementRef;

get nomFormation(){
  return this.formCreateFormation.get('nomFormation');
}
get referenceFormation(){
return this.formCreateFormation.get('referenceFormation');
}
get publicFormation(){
  return this.formCreateFormation.get('publicFormation');
}
get objectifsFormation(){
  return this.formCreateFormation.get('objectifsFormation');
}
get detailsFormation(){
  return this.formCreateFormation.get('detailsFormation');
}
get chaptersFormation(){
  return this.formCreateFormation.get('chaptersFormation');
}
get priceFormation(){
  return this.formCreateFormation.get('priceFormation');
}
get dureeFormation(){
  return this.formCreateFormation.get('dureeFormation');
}

constructor(private formationService:FormationsService, private router:Router) { }

ngOnInit(): void {
  }
saveFormation(){
  this.formationService.CreateFormation(this.formation).subscribe(data=>{
    console.log(data)
  })
}

onSubmit(){
  if(this.formCreateFormation.valid){
    this.saveFormation();
    this.myValidationEnregistrementFormation.nativeElement.innerHTML="Une nouvelle formation à été ajouter";
  }else{
    this.mySpanFormation.nativeElement.innerHTML="SVP, Champs obligatoires manquants !";
  }
}


formCreateFormation=new FormGroup({
nomFormation:new FormControl('',[
Validators.required,Validators.minLength(1)
]),
referenceFormation:new FormControl('',[
  Validators.required,Validators.minLength(3)
]),
publicFormation:new FormControl('',[
  Validators.required,Validators.minLength(3)
]),
objectifsFormation:new FormControl('',[
  Validators.required,Validators.minLength(3)
]),
detailsFormation:new FormControl('',[
  Validators.required,Validators.minLength(3)
]),
chaptersFormation:new FormControl('',[
  Validators.required,Validators.minLength(3)
]),
priceFormation:new FormControl('',[
  Validators.required,Validators.minLength(3)
]),
dureeFormation:new FormControl('',[
  Validators.required,Validators.minLength(1)
]),
})



}
