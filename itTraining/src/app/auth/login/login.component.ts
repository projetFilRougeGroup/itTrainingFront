import { TokenService } from './../../_services/token.service';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/_interfaces/credential';
import { IToken } from 'src/app/_interfaces/token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: ICredential ={
    email:'',
    password:''
  }

  constructor(private authService:AuthService, private tokenService:TokenService){

  }
  ngOnInit(): void {

  }
  onSubmit():void{
    console.log(this.form) ///////////////////////////////////////////////////////////////////////a modifier
    this.authService.login(this.form).subscribe(
      data=>{
        console.log(data.access_token)
        this.tokenService.saveToken(data.access_token)
      },
      err=>console.log(err)
    )
  }

}
