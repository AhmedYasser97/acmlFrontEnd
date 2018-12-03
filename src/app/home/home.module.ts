import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import {PickTeamComponent} from '../pick-team/pick-team.component';

@NgModule({
  imports: [ HttpClientModule,HttpModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [HomeComponent,PickTeamComponent],
  providers: []
})
export class HomeModule {}
