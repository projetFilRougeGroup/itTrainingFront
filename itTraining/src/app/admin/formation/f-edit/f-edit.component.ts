import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-edit',
  templateUrl: './f-edit.component.html',
  styleUrls: ['./f-edit.component.css']
})
export class FEditComponent implements OnInit {

  constructor(private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

}
