import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

newsletterForm!:FormControl;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.newsletterForm = new FormControl('',[
Validators.required, Validators.email
    ]);
  }

  subscribe():void {
    if(this.newsletterForm.valid){
    console.log(this.newsletterForm.value);
  }
  }

}
