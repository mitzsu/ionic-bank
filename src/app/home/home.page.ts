import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitylistPage } from '../citylist/citylist.page';
import { CityService } from '../city.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalController: ModalController, private cityService: CityService) {}
  
  ngOnInit(){
    console.log(this.cityService.getMainCities());
  }

  async openCityList(isSearch){
    const modal = await this.modalController.create({
      component: CitylistPage,
      componentProps: {
        'searchbar': isSearch
      }
    });
    return await modal.present();
  }
}
