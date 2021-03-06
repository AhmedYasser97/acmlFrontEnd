import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [ HttpClientModule, CommonModule, FormsModule ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}