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

  get OrderPrice(): number {
    return this._orderPrice;
  }

  set OrderPrice(value: number) {
    this._orderPrice = value;
  }

  get Country(): string {
    return this._country;
  }

  set Country(value: string) {
    this._country = value;
  }

  get Street(): string {
    return this._street;
  }

  set Street(value: string) {
    this._street = value;
  }

  get PostalCode(): string {
    return this._postalCode;
  }

  set PostalCode(value: string) {
    this._postalCode = value;
  }

  get Products(): ProductDto[] {
    return this._products;
  }

  set Products(value: ProductDto[]) {
    this._products = value;
  }

  get CardType(): string {
    return this._cardType;
  }

  set CardType(value: string) {
    this._cardType = value;
  }

  get CardNumber(): string {
    return this._cardNumber;
  }

  set CardNumber(value: string) {
    this._cardNumber = value;
  }

  get CardName(): string {
    return this._cardName;
  }

  set CardName(value: string) {
    this._cardName = value;
  }

  get CardCVC(): string {
    return this._cardCVC;
  }

  set CardCVC(value: string) {
    this._cardCVC = value;
  }

  get CardExpiration(): string {
    return this._cardExpiration;
  }

  set CardExpiration(value: string) {
    this._cardExpiration = value;
  }
}
