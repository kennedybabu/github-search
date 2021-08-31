import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {User} from "../user"
@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {

  // (public name: string, public email: string, public bio: string, public profile_photo: string, public followers: number, public following: number){


  user = new User("","","","", 0, 0)
  public userQuery!:string
  public userProfile!:any
  public userRepos!:any[]
  returnedData:any

  searchUser(userQuery:any){
    this.userService.getUserProfile(this.userQuery).subscribe(userData=> {
      this.userProfile = userData
      console.log(this.userProfile)

    })
    this.userService.getUserRepos(this.userQuery).subscribe(userData => {
      this.userRepos = userData

      console.log(this.userRepos)
    })
  }
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
