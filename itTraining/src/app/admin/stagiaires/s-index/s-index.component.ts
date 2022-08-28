import { Stagiaire } from 'src/app/_interfaces/stagiaires';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StagiairesService } from 'src/app/_services/stagiaires.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-index',
  templateUrl: './s-index.component.html',
  styleUrls: ['./s-index.component.css']
})
export class SIndexComponent implements OnInit {
  stagiaireList!: Stagiaire[];

  constructor(private stagiairesService: StagiairesService, private router:Router) { }

  ngOnInit(): void {
    this.getStagiaires();
  }


  private getStagiaires(){
    this.stagiairesService.getAllStagiaires().subscribe((data:any)=>{
      this.stagiaireList=data
    });
  }
  // formationDetails(idFormation?: number){
  //   this.router.navigate(['formation-details',idFormation])
  // }

  deleteStagiaire(stagiaire:any){
    this.stagiairesService.deleteStagiaire(stagiaire.idStagiaire).subscribe(
      (resp)=>{
        console.log(resp);
        this.getStagiaires();
      },
      (err)=>{
        console.log(err);
      }
    )
  }


}
