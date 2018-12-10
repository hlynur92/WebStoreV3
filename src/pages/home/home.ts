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
  products: Observable<any>;
  products2: ProductDto[];
  cart: ProductDto[];

  constructor(public navCtrl: NavController, public ApiProvider: ApiProvider) {
    this.products = this.ApiProvider.GetProducts();
    this.products.subscribe(products => {
      this.products2 = products;
      console.log(this.products2);
      this.cart = [];
    });

    /*
    this.products.subscribe(data =>
    {
      console.log('my data: ', data);
    });
    */
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
