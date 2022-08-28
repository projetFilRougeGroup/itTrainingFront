import { Formations } from './../../../_interfaces/formations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormationsService } from 'src/app/_services/formations.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-f-index',
  templateUrl: './f-index.component.html',
  styleUrls: ['./f-index.component.css']
})
export class FIndexComponent implements OnInit {
  formationList!: Formations[];


formationToUpdate = {
  idFormation:"",
  nomFormation:"",
  referenceFormation:"",
  publicFormation:"",
  objectifsFormation:"",
  detailsFormation:"",
  chaptersFormation:"",
  priceFormation:"",
  dureeFormation:""
};
  @ViewChild("mySpanFormation")
mySpanFormation!:ElementRef;
@ViewChild("myValidationEnregistrementFormation")
myValidationEnregistrementFormation!:ElementRef;

@Input()
get nomFormation(){
  return this.formCreateFormation.get('nomFormation');
}
@Input()
get referenceFormation(){
return this.formCreateFormation.get('referenceFormation');
}
@Input()
get publicFormation(){
  return this.formCreateFormation.get('publicFormation');
}
@Input()
get objectifsFormation(){
  return this.formCreateFormation.get('objectifsFormation');
}
@Input()
get detailsFormation(){
  return this.formCreateFormation.get('detailsFormation');
}
@Input()
get chaptersFormation(){
  return this.formCreateFormation.get('chaptersFormation');
}
@Input()
get priceFormation(){
  return this.formCreateFormation.get('priceFormation');
}
@Input()
get dureeFormation(){
  return this.formCreateFormation.get('dureeFormation');
}

  constructor(private formationsService: FormationsService, private router:Router) { }

  ngOnInit(): void {
    this.getFormations();
  }


  private getFormations(){
    this.formationsService.getAllFormations().subscribe((data:any)=>{
      this.formationList=data
    });
  }

  deleteFormation(formation:any){
    this.formationsService.deleteFormation(formation.idFormation).subscribe(
      (resp)=>{
        console.log(resp);
        this.getFormations();
      },
      (err)=>{console.log(err);}
    );
  }

register(registerForm:NgForm){
  this.formationsService.CreateFormation(registerForm.value).subscribe(
    (resp)=>{
      console.log(resp);
      this.getFormations();
    },
    (err)=>{
      console.log(err);
    }
  )
}

// onSubmit(){
//   if(this.formCreateFormation.valid){
//    // this.saveFormation();
//     this.myValidationEnregistrementFormation.nativeElement.innerHTML="Une nouvelle formation à été ajouter";
//   }else{
//     this.mySpanFormation.nativeElement.innerHTML="SVP, Champs obligatoires manquants !";
//   }
// }

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


  // formationDetails(idFormation?: number){
  //   this.router.navigate(['formation-details',idFormation])
  // }


}
