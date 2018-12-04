export class ProductDto {
  private _productName: string;
  private _productType: string;
  private _productDesc: string;
  private _productPrice: string;
  private _productQuantity: string;

  constructor(){

  }

  GetProductName(){
    return this._productName;
  }

  SetProductName(productName:string){
    this._productName = productName;
  }

  GetProductType(){
    return this._productType;
  }

  SetProductType(productType:string){
    this._productType = productType;
  }

  GetProductDesc(){
    return this._productDesc;
  }

  SetProductDesc(productDesc:string){
    this._productDesc = productDesc;
  }

  GetProductPrice(){
    return this._productPrice;
  }

  SetProductPrice(productprice:string){
    this._productPrice = productprice;
  }

  GetProductQuantity(){
    return this._productQuantity;
  }

  SetProductQuantity(productQuantity:string){
    this._productQuantity = productQuantity;
  }
}
