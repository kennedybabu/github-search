import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { DateCountPipe } from './date-count.pipe'
@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    UserProfileComponent,
    UserDetailComponent,
    UserDataComponent,
    UserReposComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
