import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { DashboardHojeComponent } from './dashboard-hoje/dashboard-hoje.component';
import { DasboardAdministrativoComponent } from './dasboard-administrativo/dasboard-administrativo.component';
import { FormsModule } from '@angular/forms';
import { StockListaComponent } from './stock-lista/stock-lista.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
    DashboardHojeComponent,
    DasboardAdministrativoComponent,
    StockListaComponent,
    FormularioComponent,


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

  ],
  exports:[
    DashboardPageComponent
  ],
})
export class DashboardModule { }
