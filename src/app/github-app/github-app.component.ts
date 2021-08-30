import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {


  public userQuery!:string

  searchUser(){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
