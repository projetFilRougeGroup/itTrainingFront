import { Router } from '@angular/router';
import { ThemService } from './../../../_services/them.service';
import { Theme } from './../../../_interfaces/theme';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-them-add',
  templateUrl: './them-add.component.html',
  styleUrls: ['./them-add.component.css']
})
export class ThemAddComponent implements OnInit {

  theme:Theme=new Theme();

  @ViewChild("mySpanTheme")
  mySpanTheme!:ElementRef;
  @ViewChild("myValidationEnregistrementTheme")
  myValidationEnregistrementTheme!:ElementRef;

  get nomTheme(){
    return this.formCreateTheme.get('nomTheme');
  }
  constructor(private themeService : ThemService, private router:Router) { }

  ngOnInit(): void {
  }

  saveTheme(){
    this.themeService.createTheme(this.theme).subscribe(data=>{
      console.log(data)
    })
  }

  onSubmit(){
    if(this.formCreateTheme.valid){
      this.saveTheme();
      this.myValidationEnregistrementTheme.nativeElement.innerHTML="Un nouveau Theme à bien été ajouter !";
    }
    else{
      this.mySpanTheme.nativeElement.innerHTML = 'SVP, champs obligatoires manquants !';
    }
  }

  formCreateTheme = new FormGroup({
    nomTheme:new FormControl('',[
      Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z\-]+$")
    ]),

    })













}
