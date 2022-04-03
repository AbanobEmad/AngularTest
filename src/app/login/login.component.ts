import { Component, OnInit } from '@angular/core';
import { User } from 'src/Shared Classes and types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  user=new User("","","","","");
  ngOnInit(): void {
  }

}
