import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreciosComponent } from './precios/precios.component';
import { MejorOpcionVentaComponent } from './mejor-opcion-venta/mejor-opcion-venta.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { ClimaComponent } from './clima/clima.component';
import { FinancieroComponent } from './financiero/financiero.component';

const dashboardRoutes: Routes = [
{path:'', component:PreciosComponent},
{path:'precios', component:PreciosComponent},
{path:'mejor-opcion-venta', component:MejorOpcionVentaComponent},
{path:'produccion', component:ProduccionComponent},
{path:'clima', component:ClimaComponent},
{path:'financiero', component:FinancieroComponent},
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreciosComponent, MejorOpcionVentaComponent, ProduccionComponent, ClimaComponent, FinancieroComponent]
})
export class DashboardModule { }
