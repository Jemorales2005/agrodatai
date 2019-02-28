import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { BoardComponent } from './components/board/board.component';
import { NavbarboardComponent } from './components/navbarboard/navbarboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraphsComponent } from './components/graphs/graphs.component';

const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'board', component:BoardComponent},
{path:'dashboard', component:DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarhomeComponent,
    BoardComponent,
    NavbarboardComponent,
    DashboardComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoJa91p2BgvgbJq7v-uD3asUCX1QCAMpg'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
