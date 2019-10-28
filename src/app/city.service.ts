import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getMainCities(){
    return ["BANGALORE","MUMBAI","PUNE","DELHI","BAREILLY","GURGAON","HYDERABAD","CHENNAI"];
  }

  getCityList(){
    return ["BANGALORE","MUMBAI","PUNE","DELHI","BAREILLY","GURGAON","HYDERABAD","CHENNAI"];
  }
}
