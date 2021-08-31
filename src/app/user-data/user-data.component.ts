import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {


  @Input() userProfile:any

  constructor() { }

  ngOnInit(): void {
  }

}
