import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { DashboardHojeComponent } from './dashboard-hoje/dashboard-hoje.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
    DashboardHojeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    DashboardPageComponent
  ],
})
export class DashboardModule { }
