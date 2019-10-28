import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getMainCities(){
    return [
            { first: "BANGALORE", second: "MUMBAI"},
            { first: "PUNE", second: "DELHI"},
            { first: "BAREILLY", second: "GURGAON"},
            { first: "HYDERABAD", second: "CHENNAI"}
          ];
  }

  getCityList(){
    return ["BANGALORE","MUMBAI","PUNE","DELHI","BAREILLY","GURGAON","HYDERABAD","CHENNAI"];
  }
}
