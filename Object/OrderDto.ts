import {ProductDto} from "./ProductDto";

export class OrderDto {
  private _orderPrice: number;
  private _country: string;
  private _street: string;
  private _postalCode: string;
  private _products: ProductDto[];
  private _cardType: string;
  private _cardNumber: string;
  private _cardName: string;
  private _cardCVC: string;
  private _cardExpiration: string;

  constructor(){

  }

  get orderPrice(): number {
    return this._orderPrice;
  }

  set orderPrice(value: number) {
    this._orderPrice = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  set postalCode(value: string) {
    this._postalCode = value;
  }

  get products(): ProductDto[] {
    return this._products;
  }

  set products(value: ProductDto[]) {
    this._products = value;
  }

  get cardType(): string {
    return this._cardType;
  }

  set cardType(value: string) {
    this._cardType = value;
  }

  get cardNumber(): string {
    return this._cardNumber;
  }

  set cardNumber(value: string) {
    this._cardNumber = value;
  }

  get cardName(): string {
    return this._cardName;
  }

  set cardName(value: string) {
    this._cardName = value;
  }

  get cardCVC(): string {
    return this._cardCVC;
  }

  set cardCVC(value: string) {
    this._cardCVC = value;
  }

  get cardExpiration(): string {
    return this._cardExpiration;
  }

  set cardExpiration(value: string) {
    this._cardExpiration = value;
  }
}
