import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {

  card2
  constructor(private data: DataService, private route: Router) {
    this.card2 = this.data.getcard();
  }

  ngOnInit(): void {

  }
  shopMore() {
    this.route.navigate(['/']);
  }

  deleter(id) {
    for (let index = 0; index < this.data.setcard.length; index++) {
      if (this.data.setcard[index]["path"] == this.data.setcard[id].path) {
        this.data.setcard.splice(index, 1);
        //console.log("deleted" + this.data.setcard[index]['path']);
      }
    }
  }
}
