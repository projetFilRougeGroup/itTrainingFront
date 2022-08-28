import { Router } from '@angular/router';
import { SessionService } from './../../../_services/session.service';
import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/_interfaces/session';

@Component({
  selector: 'app-session-index',
  templateUrl: './session-index.component.html',
  styleUrls: ['./session-index.component.css']
})
export class SessionIndexComponent implements OnInit {

  sessionList!:Session[];

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit(): void {
    this.getSession();
  }
private getSession(){
  this.sessionService.getAllSessions().subscribe((data:any)=>{
    this.sessionList=data
  });
}

deleteSession(session:any){
  this.sessionService.deleteSession(session.idSession).subscribe(
    (resp)=>{
      console.log(resp);
      this.getSession();
    },
    (err)=>{
      console.log(err);
    }
  )
}




}
