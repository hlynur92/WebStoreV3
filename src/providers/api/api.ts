import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {NavParams} from "ionic-angular";
import {OrderDto} from "../../../Object/OrderDto";

@Injectable()
export class ApiProvider {
  //http://localhost:17899/api

  constructor(public http: HttpClient) {

  }

  //HTTP GET Request which asks for a list of products
  GetProducts(){
    return this.http.get('/api/Store/products');
  }

  //HTTP POST Request which sends an order to be stored
  StoreProducts(order: OrderDto){
    this.http.post('/api/Store/order',
       /*Body*/ JSON.stringify(order),
      {headers: {'Content-Type': 'application/json'}}).subscribe(data => {
        console.log(data);
    },error => {
        console.log(error)
      });
  }
}
