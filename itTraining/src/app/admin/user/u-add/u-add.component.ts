import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { IUser } from 'src/app/_interfaces/user';

@Component({
  selector: 'app-u-add',
  templateUrl: './u-add.component.html',
  styleUrls: ['./u-add.component.css']
})
export class UAddComponent implements OnInit {

  user:IUser=new IUser();


  constructor(private userService: UserService, private router:Router) { }

// @ViewChild("mySpann")
// mySpann!:ElementRef;
// @ViewChild("myValidationEnregistrementEnseignant")
// myValidationEnregistrementEnseignant!:ElementRef;
// get nomEnseignant(){
//   return this.formCreateEnseignant.get('nomEnseignant');
// }

// get prenomEnseignant(){
//   return this.formCreateEnseignant.get('prenomEnseignant');
// }
// get emailEnseignant(){
//   return this.formCreateEnseignant.get('emailEnseignant');
// }
// get telEnseignant(){
//   return this.formCreateEnseignant.get('telEnseignant');
// }
// get adresseEnseignant(){
//   return this.formCreateEnseignant.get('adresseEnseignant');
// }

//   constructor(private enseignantService : EnseignantService, private router:Router) { }

  ngOnInit(): void {
 }
// saveEnseignant(){
//   this.enseignantService.CreateEnseignant(this.enseignant).subscribe(data=>{
//     console.log(data)
//   })
// }

// onSubmit(){
//   if(this.formCreateEnseignant.valid){
//     this.saveEnseignant();
//     this.myValidationEnregistrementEnseignant.nativeElement.innerHTML="Un nouveau enseignant à bien été ajouter !";
//   }
//   else{
//     this.mySpann.nativeElement.innerHTML = 'SVP, champs obligatoires manquants !';
//   }
// }


// formCreateEnseignant = new FormGroup({
// nomEnseignant:new FormControl('',[
//   Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z\-]+$")
// ]),
// prenomEnseignant:new FormControl('',[
//   Validators.required,Validators.minLength(3), Validators.pattern("^[a-zA-Z\-]+$")
// ]),
// emailEnseignant:new FormControl('',[
//   Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
// ]),
// telEnseignant:new FormControl('',[
//   Validators.required,Validators.minLength(3)
// ]),
// adresseEnseignant:new FormControl('',[
//   Validators.required,Validators.minLength(15)
// ])



// })

}
