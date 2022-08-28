import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/_interfaces/enseignant';
import { EnseignantService } from 'src/app/_services/enseignant.service';

@Component({
  selector: 'app-e-index',
  templateUrl: './e-index.component.html',
  styleUrls: ['./e-index.component.css']
})
export class EIndexComponent implements OnInit {
  enseignantList!: Enseignant[];

  constructor(private enseignantService: EnseignantService, private router:Router) { }

  ngOnInit(): void {
    this.getEnseignants();
  }


  private getEnseignants(){
    this.enseignantService.getAllEnseignants().subscribe((data:any)=>{
      this.enseignantList=data
    });
  }

deleteEnseignant(enseignant:any){
this.enseignantService.deleteEnseignant(enseignant.idEnseignant).subscribe(
  (resp)=>{
    console.log(resp);
    this.getEnseignants();
  },
  (err)=>{
    console.log(err);
  }
)
}





  // formationDetails(idFormation?: number){
  //   this.router.navigate(['formation-details',idFormation])
  // }


}
