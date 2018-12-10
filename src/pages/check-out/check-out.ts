import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductDto} from "../../../Object/ProductDto";
import {OrderDto} from "../../../Object/OrderDto";
import {ApiProvider} from "../../providers/api/api";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider) {
    this.products = this.navParams.data;
    console.log("Cart Page " , this.products);
    this.order = new OrderDto();
    this.order.Products = [];
    this.order.Products = this.products;

    console.log("Check Out" , this.order)
    this.CalculateOrderPrice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPage');
  }

  CalculateOrderPrice(){
    var total = 0;
    this.products.forEach(function (product) {
      total += parseFloat(product.GetProductPrice());
    });

    this.order.OrderPrice = total;

    console.log("Order Price " , this.order.OrderPrice);
  }

  ConfirmCheckOut(){
    console.log(this.order);

    this.ApiProvider.StoreProducts(this.order);
  }
}
