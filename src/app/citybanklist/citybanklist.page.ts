import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { BankList } from '../citybanklist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-citybanklist',
  templateUrl: './citybanklist.page.html',
  styleUrls: ['./citybanklist.page.scss'],
})
export class CitybanklistPage implements OnInit {

  public cityName: string;
  public bankList = [{bank_name: 'loading...', branch: 'loading...', ifsc: 'loading...'}];
  private _url: string = "https://vast-shore-74260.herokuapp.com/banks?city=";
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cityName = params.get("city").toUpperCase();
      this.showBankList(this._url+this.cityName);
    });
  }

  showBankList(url){
    this.getBankList(url).subscribe((data) => {
      if(data.length>0)
        this.bankList = data;
      else
         this.bankList = [{bank_name: "No data is received", branch: "", ifsc: ""}]
    });
  }

  getBankList(url): Observable<BankList[]>{
    return this.http.get<BankList[]>(url);
  }
}
