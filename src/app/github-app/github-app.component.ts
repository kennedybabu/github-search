import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {User} from "../user"
import { Repo } from '../repo';
@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {



  user = new User("","","","", 0, 0)
  public userQuery!:string
  public userProfile!:any
  public userRepos!: Repo[]
  returnedData:any


  //get user data from API
  searchUser(userQuery:any){
    this.userService.getUserProfile(this.userQuery).subscribe(userData=> {
      this.userProfile = userData
      // console.log(this.userProfile)

    })
    this.userService.getUserRepos(this.userQuery).subscribe(userData => {
      this.userRepos= userData

    })
  }
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
