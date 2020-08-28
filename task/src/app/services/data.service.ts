import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: string;
  url: string;
  price: number;
  discrip: string;
  totalPrice: number;
  setcard = [{ path: '../../../assets/hairPics/images(1).jpeg', discrip: 'short, Black Color', price: 200 },
  { path: '../../../assets/hairPics/images (9).jpeg', discrip: 'mediam, Black Color,  curled', price: 500 }];

  constructor() { }

  setData(_url, _datas, _discrip, _price) {
    this.data = _datas;
    this.url = _url;
    this.discrip = _discrip;
    this.price = _price;
  }

  deleterOrder(id) {
    for (let index = 0; index < this.setcard.length; index++) {
      if (this.setcard[index]["path"] == id) {
        this.setcard.slice(index, 1);
      }
    }
  }

  getcard() {
    return this.setcard;
  }
  getTotalItem() {
    return this.setcard.length;
  }
  getTotalPrice() {
    this.totalPrice = 0;
    for (let index = 0; index < this.setcard.length; index++) {
      this.totalPrice = this.totalPrice + this.setcard[index].price;
    }
    return this.totalPrice;
  }

  getDatas() {
    return this.url + this.data;
  }
  getDiscrip() {
    return this.discrip;
  }
  getPrice() {
    return this.price;
  }

}
