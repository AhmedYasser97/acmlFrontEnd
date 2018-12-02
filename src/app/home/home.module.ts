import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ HttpClientModule,HttpModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}
