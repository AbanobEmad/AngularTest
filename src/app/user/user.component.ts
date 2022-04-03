import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/Shared Classes and types/IUser';
import { UserService } from '../Serviscs/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private userServes:UserService) {
  }

  ngOnInit(): void {
  this.userServes.GetAllUsers().subscribe(data=>{this.users=data;});
  }

}
