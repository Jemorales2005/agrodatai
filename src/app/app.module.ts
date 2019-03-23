import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { BoardComponent } from './components/board/board.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { AutenticarService } from './services/autenticar.service';
import { LoggedGuard } from './services/logged.guard';
import { UnloggedGuard } from './services/unlogged.guard';
import { environment } from '../environments/environment';
import { SearchPipe } from './pipes/search';
import { KeysPipe } from './pipes/keys';

const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent,canActivate: [UnloggedGuard]},
{path:'register', component:RegisterComponent},
{path:'board', component:BoardComponent, canActivate: [LoggedGuard]},
];

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
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{useHash: true}),
    /*AgmCoreModule.forRoot({
      apiKey: environment.ApiKeyGoogleMap
    }),*/
  ],
  providers: [AutenticarService,LoggedGuard,UnloggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
