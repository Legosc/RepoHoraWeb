import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent} from "./clients/clients.component";
import { HourListComponent } from './hour/hour-list/hour-list.component';
import { HourCreateComponent } from './hour/hour-create/hour-create.component';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'hours', component: HourListComponent, canActivate: [AuthGuard] },
  { path: 'hours/create', component: HourCreateComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
