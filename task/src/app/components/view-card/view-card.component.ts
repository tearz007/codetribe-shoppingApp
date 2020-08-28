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
  /*deleter(id) {
    this.data.deleterOrder(id);
    alert(this.data.setcard.pop().path);
  }*/

  deleter(id) {
    for (let index = 0; index < this.data.setcard.length; index++) {
      console.log("deleted" + this.data.setcard[index]['path']);
      if (this.data.setcard[index]["path"] == this.data.setcard[id].path) {
        this.data.setcard.slice();
        //console.log("deleted" + this.data.setcard[index]['path']);
        alert(this.data.setcard.pop().path);
      }

    }

  }

  /*deleter(id) {
    const i=this.data.setcard.findIndex(index => index.path == this.data.setcard[id].path);
    console.log("deleted" + this.data.setcard[i]['path']);
    if (i !== -1) {
      this.data.setcard.slice(i , 1);
      console.log("deleted" + this.data.setcard[i]['path']);
      alert(this.data.setcard.pop().path);
    }

  }*/

  /*deleterOrder(id:string){
    this.data.setcard.findIndex(index => index.path ==id);
  }*/
}
