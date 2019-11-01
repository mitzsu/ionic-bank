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
  public bankList = [{bank_name: 'loading...', branch: 'loading...', ifsc: 'loading...', isShow: true}];
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
      if(data.length>0){
        for(let i=0; i<data.length; i++){
          data[i].isShow = true;
        }
        this.bankList = data;
      }
      else{
        let json = {bank_name: "No data is received", branch: "", ifsc: "", isShow: true};
        this.bankList = [json];
      }
    });
  }

  getBankList(url): Observable<BankList[]>{
    return this.http.get<BankList[]>(url);
  }

  changeList(event){
    let query = event.target.value.toLowerCase();
    if(query===''){
      for(let i=0; i<this.bankList.length; i++){
        this.bankList[i]["isShow"] = true;
      }
    }
    else{
      for(let i=0; i<this.bankList.length; i++){
        let bankName = this.bankList[i]["bank_name"].toLowerCase();
        let branchName = this.bankList[i]["branch"].toLowerCase();
        let ifscCode = this.bankList[i]["ifsc"].toLowerCase();
        if( bankName.indexOf(query) > -1 || branchName.indexOf(query) > -1 || ifscCode.indexOf(query) > -1 ){
          this.bankList[i]["isShow"] = true;
        }
        else{
          this.bankList[i]["isShow"] = false;
        }
      }
    }
  }
  
}
