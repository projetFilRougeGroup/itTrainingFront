import { Router } from '@angular/router';
import { StagiaireService } from './../stagiaire.service';
import { Stagiaire } from './../stagiaire';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stagiaire',
  templateUrl: './create-stagiaire.component.html',
  styleUrls: ['./create-stagiaire.component.css']
})
export class CreateStagiaireComponent implements OnInit {

  stagiaire: Stagiaire = new Stagiaire();

  @ViewChild("mySpan")
  mySpan!: ElementRef;
  @ViewChild("myValidationEnregistrementStagiaire")
  myValidationEnregistrementStagiaire!: ElementRef;


  get nomStagiaire(){
    return this.formCreateStagiaire.get('nomStagiaire');
  }
  get prenomStagiaire(){
    return this.formCreateStagiaire.get('prenomStagiaire');
  }
  get emailFirst(){
    return this.formCreateStagiaire.get('emailStagiaire');
  }
  get telStagiaire(){
    return this.formCreateStagiaire.get('telStagiaire');
  }
  get adresseStagiaire(){
    return this.formCreateStagiaire.get('adresseStagiaire');
  }
  constructor(private stagiaireService : StagiaireService, private router:Router) { }

  ngOnInit(): void {
  }
  saveStagiaire(){
    this.stagiaireService.CreateStagiaire(this.stagiaire).subscribe(data=>{
      console.log(data);
      // this.goToStagiaireList();
    },error=>console.log(error)
    );
  }
  /*
  goToStagiaireList(){
    this.router.navigate(['/stagiaires'])
  }*/
  onSubmit(){
    if(this.formCreateStagiaire.valid){
      this.saveStagiaire();
      this.myValidationEnregistrementStagiaire.nativeElement.innerHTML = 'Votre demande d\'inscription à été bien envoyer !';

    }
    else{
      this.mySpan.nativeElement.innerHTML = 'SVP, champs obligatoires manquants !';
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

  });


}
