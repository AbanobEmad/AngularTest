import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/Shared Classes and types/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private _url="https://jsonplaceholder.typicode.com/users";
  GetAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._url);
  }
}
