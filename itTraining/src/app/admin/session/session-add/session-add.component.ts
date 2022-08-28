import { Router } from '@angular/router';
import { SessionService } from './../../../_services/session.service';
import { Session } from 'src/app/_interfaces/session';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.css']
})
export class SessionAddComponent implements OnInit {

  Session:Session=new Session();


@ViewChild("mySpanSession")
mySpanSession!:ElementRef;
@ViewChild("myValidationEnregistrementSession")
myValidationEnregistrementSession!:ElementRef;



get dateDebutSession(){
  return this.formCreateSession.get('dateDebutSession');
}
get dateFinSession(){
  return this.formCreateSession.get('dateFinSession');
}
get price(){
  return this.formCreateSession.get('price');
}

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit(): void {
  }

  saveSession(){
    this.sessionService.CreateSession(this.Session).subscribe(data=>{
      console.log(data)
    })
  }

onSubmit(){
  if(this.formCreateSession.valid){
    this.saveSession();
    this.myValidationEnregistrementSession.nativeElement.innerHTML="Un nouveau Session à bien été ajouter !";
  }
  else{
    this.mySpanSession.nativeElement.innerHTML = 'SVP, champs obligatoires manquants !';
  }
}

formCreateSession = new FormGroup({
  dateDebutSession:new FormControl('',[
    Validators.required,Validators.minLength(3)
  ]),
  dateFinSession:new FormControl('',[
    Validators.required,Validators.minLength(3)
  ]),
  price:new FormControl('',[
    Validators.required
  ])
  })


}
