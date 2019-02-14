import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';

const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarhomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoJa91p2BgvgbJq7v-uD3asUCX1QCAMpg'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
