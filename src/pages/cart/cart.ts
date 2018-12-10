import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductDto} from "../../../Object/ProductDto";
import { CheckOutPage } from "../check-out/check-out";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  products : ProductDto[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.products = [];
    this.products = this.navParams.data;
    console.log("Cart Page " , this.products);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  CheckOut(){
    this.navCtrl.push(CheckOutPage, this.products);
  }
}
/*
 */
