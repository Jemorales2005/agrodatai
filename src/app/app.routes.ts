import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoggedGuard } from './services/logged.guard';
import { UnloggedGuard } from './services/unlogged.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { BoardComponent } from './components/board/board.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent,canActivate: [UnloggedGuard]},
{path:'register', component:RegisterComponent},
{path:'board', component:BoardComponent, canActivate: [LoggedGuard]},
{path: 'dashboard', component:DashboardComponent, children: dashboardRoutes},
{path: '**',redirectTo: 'home'}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash: true});
