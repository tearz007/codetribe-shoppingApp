import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {

  constructor() { }
  public card = [];

  public product = {
    promo: ['images (23).jpeg', 'images (24).jpeg', 'images (25).jpeg'],
    short: ['images (11).jpeg', 'images (12).jpeg', 'images (13).jpeg'],
    long: ['images (23).jpeg', 'images (24).jpeg', 'images (25).jpeg'],

    promoPrice: [400, 500, 570],
    shortPrice: [600, 700, 800],
    longPrice: [300, 400, 500],

    promoDiscrib: ['short, rich color , semi curled', 'nick long, two colors , semi curled', 'short, rich color , parm'],
    shortDiscrib: ['short, black ,  curled', 'short, black ,  curled', 'short, rich black ,  curled'],
    longDiscrib: ['short, rich color , semi curled', 'nick long, two colors , semi curled', 'short, rich color , parm'],
  }

  getProduct() {
    return this.product;
  }
}
