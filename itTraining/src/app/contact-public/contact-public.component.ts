import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-public',
  templateUrl: './contact-public.component.html',
  styleUrls: ['./contact-public.component.css']
})
export class ContactPublicComponent implements OnInit {


  get nomFirst(){
    return this.formContactPublic.get('nom')
  }
  get emailFirst(){
    return this.formContactPublic.get('email')
  }
  get sujetFirst(){
    return this.formContactPublic.get('sujet')
  }
  get messageFirst(){
    return this.formContactPublic.get('message')
  }
  formContactPublic = new FormGroup({
    nom:new FormControl('',[
      Validators.required, Validators.minLength(3)
    ]),
    email:new FormControl('',[
      Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    sujet:new FormControl('',[
      Validators.required,Validators.minLength(3)
    ]),
    message:new FormControl('',[
      Validators.required,Validators.minLength(15)
    ])

  });


  constructor() { }

  ngOnInit(): void {
  }

}
