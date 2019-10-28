import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-citybanklist',
  templateUrl: './citybanklist.page.html',
  styleUrls: ['./citybanklist.page.scss'],
})
export class CitybanklistPage implements OnInit {

  public cityName: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cityName = params.get("city").toUpperCase();
    });
  }

}
