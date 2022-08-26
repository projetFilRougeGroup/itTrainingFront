import { Enseignant } from './../../../_interfaces/enseignant';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EnseignantService } from 'src/app/_services/enseignant.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-e-add',
  templateUrl: './e-add.component.html',
  styleUrls: ['./e-add.component.css']
})
export class EAddComponent implements OnInit {


  constructor(private enseignantService : EnseignantService, private router:Router) { }

  ngOnInit(): void {
  }


}
