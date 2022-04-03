import { Component, OnInit } from '@angular/core';
import { User } from 'src/Shared Classes and types/User';
import { LoginService } from '../Serviscs/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  response:any;
  constructor(private loginServes:LoginService) { }

  user=new User("Abanob","bebo@gmail.com","asadsa","asadsa","FaceBook");
   Top=["FaceBook","twitter","Google"];

  ngOnInit(): void {
  }
  async register  () 
{
  console.log("asd");
   this.loginServes.register("AbcAbcAbc","Abc@gmail.com","AsdAsd.123").subscribe(data=>this.response=data);
  console.log(this.response);
}
}
