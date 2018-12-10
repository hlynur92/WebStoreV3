import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {NavParams} from "ionic-angular";
import {OrderDto} from "../../../Object/OrderDto";

@Injectable()
export class ApiProvider {
  //order: OrderDto

  constructor(public http: HttpClient) {

  }

  GetProducts(){
    return this.http.get('/api/Store/products');
  }
//http://localhost:17899
  StoreProducts(order: OrderDto){
    this.http.post('/api/Store/order',
      /*Body*/ JSON.stringify(order),
      {headers: {'Content-Type': 'application/json'}}).subscribe(data => {
        console.log(data);
    },error => {
        console.log(error)
      });
    console.log(order)
  }
}
