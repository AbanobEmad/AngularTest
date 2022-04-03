import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  _url:string="assets/Data/Products.json"

  GetAllProdCucts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url)
  }
  
}
