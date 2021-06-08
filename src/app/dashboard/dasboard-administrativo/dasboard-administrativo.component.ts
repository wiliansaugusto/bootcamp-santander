import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dasboard-administrativo',
  templateUrl: './dasboard-administrativo.component.html',
  styleUrls: ['./dasboard-administrativo.component.css']
})
export class DasboardAdministrativoComponent implements OnInit {
  stocks: Stock[];

  constructor(private dasboardService:DashboardService) { }

  ngOnInit(): void {
    this.fetctStockLista();
  }
  async fetctStockLista():Promise<void>{
      this.stocks = await this.dasboardService.getStocks();
      console.log(this.stocks);
  }

}
