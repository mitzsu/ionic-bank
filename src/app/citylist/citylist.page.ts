import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.page.html',
  styleUrls: ['./citylist.page.scss'],
})
export class CitylistPage implements OnInit {

  @Input() searchbar: boolean;
  public showShowSearchBar: string;
  
  constructor(public modalController: ModalController, navParams: NavParams) { 
    this.showShowSearchBar = (navParams.get('searchbar'))?"block":"none";
  }

  ngOnInit() {
    document.getElementById("searchcity").style.display = this.showShowSearchBar;
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
