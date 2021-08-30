import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {


  public userQuery!:string
  public userProfile!:any
  public userRepos!:any[]
  returnedData:any

  searchUser(userQuery:any){
    this.userService.getUserProfile(this.userQuery).subscribe(userData=> {
      this.returnedData = userData

    })
    this.userService.getUserRepos(this.userQuery).subscribe(userData => {
      
    })
  }
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
