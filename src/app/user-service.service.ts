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


  //fetch data from the API
  getUserProfile(searchQuery:any){
    return this.httpClient.get(`${this.apiUrl}${searchQuery}${this.token}`)

  }

  getUserRepos(searchQuery:any){
    return this.httpClient.get<any[]>(`${this.apiUrl}${searchQuery}/repos?${this.token}`)

  }
}
