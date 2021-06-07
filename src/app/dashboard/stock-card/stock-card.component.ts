import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock = new Stock();
  constructor() { }

  ngOnInit(): void {
  }
  get variation():string{
    const localizeVariationString = this.stock.variation.toLocaleString();
    const prefix = this.stock.variation > 0 ? '+' : '-';
    return `${prefix} ${localizeVariationString.replace('-','') }%`;
  }
}
