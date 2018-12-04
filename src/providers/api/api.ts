import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {

  }

  GetProducts(){
    return this.http.get('http://localhost:17899/api/Store/products');
  }
}
