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

  userList!: IUser[];

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    //this.AddUser();
  }


  // private AddUser(){
  //   this.userService.getAllUsers().subscribe((data:any)=>{
  //     this.userList=data
  //   });
  // }
  // onSubmit(): void {
  //   console.log("hello")
  // }

}
