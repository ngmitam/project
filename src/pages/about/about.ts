import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    "Edit my cars",
    "History",
    "News",
    "Invite friends",
    "Give us feedback",
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
 }

}
