import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-hoje',
  templateUrl: './dashboard-hoje.component.html',
  styleUrls: ['./dashboard-hoje.component.css']
})
export class DashboardHojeComponent implements OnInit {

  stocks: Stock[] = [];
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.fetchStokcsHoje();
  }

  async fetchStokcsHoje():Promise<void>{
    this.stocks = await this.dashboardService.getStocksHoje();
    console.log(this.stocks);
  }
}
