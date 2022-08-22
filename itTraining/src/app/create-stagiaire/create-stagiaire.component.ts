import { Router } from '@angular/router';
import { StagiaireService } from './../stagiaire.service';
import { Stagiaire } from './../stagiaire';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-stagiaire',
  templateUrl: './create-stagiaire.component.html',
  styleUrls: ['./create-stagiaire.component.css']
})
export class CreateStagiaireComponent implements OnInit {

  stagiaire: Stagiaire = new Stagiaire();

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
  // goToStagiaireList(){
  //   this.router.navigate(['/stagiaires'])
  // }
  onSubmit(){
    console.log(this.stagiaire);
    this.saveStagiaire();
  }

}
