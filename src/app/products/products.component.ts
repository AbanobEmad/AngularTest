import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/Shared Classes and types/DiscountOffers';
import { ICategory } from 'src/Shared Classes and types/ICategory,';
import { IProduct } from 'src/Shared Classes and types/IProduct';
import { ProductServiceService } from '../Serviscs/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount : DiscountOffers;
  StoreName : string;
  StoreLogo:string;
  ProductList:any;
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  ISDiscount:boolean=true;
  SelectedItem:string="Toggle dropdown";
  IDOfCategory:number=0;
  UserName:string ="";
  ISWelcome:boolean =true;
  ErrorMessage : string="";
  
  constructor(private productServes:ProductServiceService) 
  {
    this.Discount=DiscountOffers['15%'];
    this.StoreName="Apple";
    this.StoreLogo="assets/images/2.jpg";
    
    this.CategoryList=[
      {ID:1,Name:"LabTop1"},
      {ID:2,Name:"Mobile"},
      {ID:3,Name:"accessories"}
    ];
    this.ClientName="Abanoub";
    this.IsPurshased=true;
    
      this.ISDiscount=true;
  }

  ngOnInit(): void {
    
  }

  onSelectedCategory(item:any)
  {
    this.SelectedItem=item.Name;
    this.IDOfCategory=item.ID-1;
  }

 buyProduct()
 {
   if(this.UserName=="")
   {
     this.ErrorMessage="Please Enter Your Name";
   }
   else
   {
    this.ISWelcome=true;
   }
   
 }

 goProducts()
 {
  this.ISWelcome=false;
  this.UserName="";
  this.ErrorMessage="";
  this.productServes.GetAllProdCucts().subscribe(data=>{this.ProductList=data;})
 }
}
