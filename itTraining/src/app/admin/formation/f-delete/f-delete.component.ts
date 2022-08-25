import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-delete',
  templateUrl: './f-delete.component.html',
  styleUrls: ['./f-delete.component.css']
})
export class FDeleteComponent implements OnInit {

  constructor(private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

}
