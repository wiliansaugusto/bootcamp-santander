import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  readonly baseUrl = "https://bootcamp-dio-santander-willian.herokuapp.com/bootcamp";
  constructor(private http:HttpClient ) { }
  protected datePipe: DatePipe = new DatePipe('pt-BR')

  async getStocks():Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
  async getStocksHoje(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/today`).toPromise();

  }
   deleteStock(id:any):Promise <any> {
    return this.http.delete(`${this.baseUrl}/stock/${id}`).toPromise();

  }
   saveStock(stock:Stock):Promise <any>{
    stock.id = null;
     let datanoram = new Date(stock.date);
     let latest_date =this.datePipe.transform(datanoram, 'dd/MM/yyyy');
    stock.date = latest_date;
    console.log(stock);

    return this.http.post(`${this.baseUrl}/stock/`,stock ).toPromise();
  }

}

