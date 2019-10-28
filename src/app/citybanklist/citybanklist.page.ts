import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-citybanklist',
  templateUrl: './citybanklist.page.html',
  styleUrls: ['./citybanklist.page.scss'],
})
export class CitybanklistPage implements OnInit {

  public cityName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cityName = params.get("city").toUpperCase();
    });
  }

}
