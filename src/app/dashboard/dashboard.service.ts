import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private datepipe: DatePipe
readonly baseUrl = "https://bootcamp-dio-santander-willian.herokuapp.com/bootcamp";
  constructor(private http:HttpClient, ) { }

  async getStocks():Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
  async getStocksHoje(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/today`).toPromise();

  }
   deleteStock(id:any):Promise <any> {
    return this.http.delete(`${this.baseUrl}/stock/${id}`).toPromise();

  }
  async saveStock(stock:Stock):Promise <any>{
    stock.id = null;
    let data = new Date(stock.date);
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1))
     + "/" + data.getFullYear();
    stock.date = dataFormatada;
    console.log(stock);
    return this.http.post(`${this.baseUrl}/stock/`,JSON.stringify(stock) ).toPromise();
  }

}

