import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.page.html',
  styleUrls: ['./citylist.page.scss'],
})
export class CitylistPage implements OnInit {

  @Input() searchbar: boolean;
  @Input() cities: Object;
  public showShowSearchBar: string;
  public list = [];
  
  constructor(public modalController: ModalController, navParams: NavParams) { 
    this.showShowSearchBar = (navParams.get('searchbar'))?"block":"none";
    this.list = navParams.get('cities');
  }

  ngOnInit() {
    document.getElementById("searchcity").style.display = this.showShowSearchBar;
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  changeList(event){
    let query = event.target.value.toLowerCase();
    const items = Array.from(document.querySelector('ion-list').children);
    if(query===''){
      for(let i=0; i<items.length; i++){
        items[i].setAttribute('class',"show-item item ios in-list ion-focusable hydrated");
      }
    }
    else{
      for(let i=0; i<items.length; i++){
        let shouldShow = items[i].textContent.toLowerCase().indexOf(query) > -1;
        items[i].setAttribute('class',((shouldShow)?"show-item":"hide-item")+" item ios in-list ion-focusable hydrated");
      }
    }
  }
}
