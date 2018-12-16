import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from "../../../Object/ProductDto";
import {CartPage} from "../cart/cart";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  observer: Observable<any>;
  products: ProductDto[];
  cart: ProductDto[];

  constructor(public navCtrl: NavController, public ApiProvider: ApiProvider) {
    //Calls the method GetProducts from the ApiProvider
    this.observer = this.ApiProvider.GetProducts();

    //The Observable Products is a collection of events in this case it has the event GetProducts which has the data from the get request.
    //by subscriping to the observable I create an instance of the data which I set Products to be equal too.
    this.observer.subscribe(p => {
      this.products = p;
      console.log(this.products);
      this.cart = [];
    });
  }

  AddToCart(ProductName, ProductDesc, ProductType, ProductPrice){
    console.log(ProductName , " " , ProductDesc , " " , ProductType , " " , ProductPrice);

    var temp = new ProductDto();

    temp.SetProductName(ProductName);
    temp.SetProductDesc(ProductDesc);
    temp.SetProductType(ProductType);
    temp.SetProductPrice(ProductPrice);
    temp.SetProductQuantity("1");

    this.cart.push(temp);

    console.log("The Cart " , this.cart);
  }

  NavigateLogin(){
    this.navCtrl.push('LoginPage');
  }

  NavigateCart(){
    this.navCtrl.push(CartPage, this.cart);
  }
}
