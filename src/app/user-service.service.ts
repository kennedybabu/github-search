import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUserProfile(searchQuery:any){
    return this.httpClient.get(`https://api.github.com/users/${searchQuery}?access_token=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`)

  }

  getUserRepos(searchQuery:any){
    return this.httpClient.get<any[]>(`https://api.github.com/users/${searchQuery}/repos?access_token=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`)

  }
}
