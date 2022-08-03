import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {
  path:string="../../assets/images/apropos.jpg";
  alttext:string="A propos !";
  constructor() { }

  ngOnInit(): void {
  }

}
