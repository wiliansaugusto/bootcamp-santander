import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardAdministrativoComponent } from './dashboard/dasboard-administrativo/dasboard-administrativo.component';
import { DashboardHojeComponent } from './dashboard/dashboard-hoje/dashboard-hoje.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {path : '',component : DashboardPageComponent},
  {path : 'hoje', component:DashboardHojeComponent},
  {path : 'administrativo', component:DasboardAdministrativoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
