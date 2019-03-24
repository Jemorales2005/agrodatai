import { Routes } from '@angular/router';

import { DefaultComponent } from './../dashboard/default/default.component';
import { PreciosComponent } from './../dashboard/precios/precios.component';
import { ClimaComponent } from './../dashboard/clima/clima.component';
import { FinancieroComponent } from './../dashboard/financiero/financiero.component';
import { ProduccionComponent } from './../dashboard/produccion/produccion.component';
import { MejorOpcionVentaComponent } from './../dashboard/mejor-opcion-venta/mejor-opcion-venta.component';

export const dashboardRoutes: Routes = [
{path:'', component:DefaultComponent},
{path:'precios', component:PreciosComponent},
{path:'clima', component:ClimaComponent},
{path:'financiero', component:FinancieroComponent},
{path:'produccion', component:ProduccionComponent},
{path: 'mejor-opcion-venta', component:MejorOpcionVentaComponent},
{path: '**', component: DefaultComponent}
];


