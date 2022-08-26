import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/_services/user.service';
import { IUser } from './../../../_interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})
export class UIndexComponent implements OnInit {

  userList!: IUser[];

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }


  private getUsers(){
    this.userService.getAllUsers().subscribe((data:any)=>{
      this.userList=data
    });
  }

}
