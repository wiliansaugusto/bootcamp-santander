import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-stock-lista',
  templateUrl: './stock-lista.component.html',
  styleUrls: ['./stock-lista.component.css']
})
export class StockListaComponent implements OnInit {

  @Input()
  stock = new Stock();
  @Input()
  stocks : Stock[];

  constructor(private service:DashboardService) { }
  ngOnInit(): void {

  }
  get variation():string{
    const localizeVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizeVariationString.replace('-','') }%`;
  }
  variationStock(variation:any):string{
    const localizeVariationString = variation.toLocaleString();
    const prefix = variation > 0 ? '+' : '-';
    return `${prefix} ${localizeVariationString.replace('-','') }%`;
  }
  async deleteStock(id:number){
    this.stocks = await this.service.deleteStock(id);
    this.reloadCurrentPage();
 }

 reloadCurrentPage() {
  window.location.reload();
 }
}
