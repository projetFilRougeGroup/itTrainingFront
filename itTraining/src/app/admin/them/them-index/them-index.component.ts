import { ThemService } from './../../../_services/them.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/_interfaces/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-index',
  templateUrl: './them-index.component.html',
  styleUrls: ['./them-index.component.css']
})
export class ThemIndexComponent implements OnInit {

  themeList!:Theme[];

  constructor(private themService:ThemService, private router:Router) { }

  ngOnInit(): void {
    this.getThemes();
  }

  private getThemes(){
    this.themService.getAllThemes().subscribe((data:any)=>{
      this.themeList=data
    })
  }
  deleteTheme(theme:any){
    this.themService.deleteTheme(theme.idTheme).subscribe(
      (resp)=>{console.log(resp);
      this.getThemes();},
      (err)=>{console.log(err);}
    )
  }

}
