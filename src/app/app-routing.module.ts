import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PickTeamComponent } from './pick-team/pick-team.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: 'teams',
    component: PickTeamComponent
  },
  {path : '', redirectTo : 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}