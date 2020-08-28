import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public path;
  public discrip;
  public price;
  public card;
  public card2;
  totalItem
  totalPrice
  constructor(private data: DataService, private route: Router) {
    this.totalItem = this.data.getTotalItem();
    this.totalPrice = this.data.getTotalPrice();
  }

  ngOnInit(): void {

    this.path = this.data.getDatas();
    this.discrip = this.data.getDiscrip();
    this.price = this.data.getPrice();
    this.card = [];
  }

  addcard() {
    this.card.push(
      { path: this.data.getDatas(), discrip: this.data.getDiscrip(), price: this.data.getPrice() }
    )
    this.data.setcard.push(
      { path: this.data.getDatas(), discrip: this.data.getDiscrip(), price: this.data.getPrice() }
    )
    this.totalItem = this.data.getTotalItem();
    this.totalPrice = this.data.getTotalPrice();
  }

  toview() {
    this.route.navigate(['main/card/view']);
    this.card2 = this.data.setcard;

  }
  shopMore() {
    this.route.navigate(['/']);
  }

}
