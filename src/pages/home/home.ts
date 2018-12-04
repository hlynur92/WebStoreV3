import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {ProductDto} from "../../../Object/ProductDto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: Observable<any>;

  constructor(public navCtrl: NavController, public ApiProvider: ApiProvider) {
    this.products = this.ApiProvider.GetProducts();

    this.products.subscribe(data =>
    {
      console.log('my data: ', data);
    });
  }

  NavigateLogin(){
    this.navCtrl.push('LoginPage');
  }
}
/*
      <button ion-button color="default" >Add to Cart</button>
      {{product.ProductName}} a
      <p>{{product.ProductDesc}} a</p>
      <p>{{product.ProductType}} a</p>
      <p>{{product.ProductPrice}} a</p>
*/
