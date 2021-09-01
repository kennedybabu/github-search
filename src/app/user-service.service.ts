import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = environment.apiUrl
  private token = environment.token
  private clientId = environment.clientId
  private clientSecret = environment.clientSecret


  //fetch data from the API
  getUserProfile(searchQuery:any){
    return this.httpClient.get(`https://api.github.com/users/${searchQuery}?${this.clientId}&client_secret=${this.clientSecret}`)

  }

  getUserRepos(searchQuery:any){
    return this.httpClient.get<any[]>(`${this.apiUrl}${searchQuery}/repos?${this.token}`)

  }
}
