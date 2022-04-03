import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/Shared Classes and types/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }
  _url="https://jsonplaceholder.typicode.com/posts";

  GetAllPost():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this._url);
  }
}
