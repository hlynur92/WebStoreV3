import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductDto} from "../../../Object/ProductDto";
import {OrderDto} from "../../../Object/OrderDto";

/**
 * Generated class for the CheckOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})
export class CheckOutPage {
  products : ProductDto[];
  order: OrderDto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = this.navParams.data;
    console.log("Cart Page " , this.products);
    this.order.products = this.products;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPage');
  }

}
