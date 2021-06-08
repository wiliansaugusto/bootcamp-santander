import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  stock : Stock = new Stock();
  stocks: Stock[];
  constructor(private service:DashboardService) { }

  ngOnInit(): void {
  }
   async saveStock(){
    this.stocks =  await this.service.saveStock(this.stock);
    console.log(this.stocks);
    window.location.reload();
  }
}
