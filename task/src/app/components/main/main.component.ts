import { Component, OnInit } from '@angular/core';
import { ServiseService }  from '../../services/servise.service'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public product;

  constructor(private prom: ServiseService, private data: DataService) { }
  public item;
  url = "../../../assets/hairPics/";

  ngOnInit(): void {
    this.product = this.prom.getProduct();

  }

  click(type, index, discrip, price) {
    this.item = type[index];
    this.data.setData(this.url, this.item, discrip[index], price[index]);
  }
}
