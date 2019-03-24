import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
//import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

/*components*/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { BoardComponent } from './components/board/board.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*servicios*/
import { AutenticarService } from './services/autenticar.service';
import { LoggedGuard } from './services/logged.guard';
import { UnloggedGuard } from './services/unlogged.guard';
import { environment } from '../environments/environment';
import { SearchPipe } from './pipes/search';
import { KeysPipe } from './pipes/keys';
import { DefaultComponent } from './dashboard/default/default.component';
import { PreciosComponent } from './dashboard/precios/precios.component';
import { ClimaComponent } from './dashboard/clima/clima.component';
import { FinancieroComponent } from './dashboard/financiero/financiero.component';
import { ProduccionComponent } from './dashboard/produccion/produccion.component';
import { MejorOpcionVentaComponent } from './dashboard/mejor-opcion-venta/mejor-opcion-venta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarhomeComponent,
    BoardComponent,
    GraphsComponent,
    SearchPipe,
    KeysPipe,
    DashboardComponent,
    DefaultComponent,
    PreciosComponent,
    ClimaComponent,
    FinancieroComponent,
    ProduccionComponent,
    MejorOpcionVentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    routes,
    /*AgmCoreModule.forRoot({
      apiKey: environment.ApiKeyGoogleMap
    }),*/
  ],
  providers: [AutenticarService,LoggedGuard,UnloggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
