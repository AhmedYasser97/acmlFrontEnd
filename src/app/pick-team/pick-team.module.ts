import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { PickTeamComponent } from './pick-team.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';

@NgModule({
  imports: [ HttpClientModule, CommonModule, FormsModule ],
  declarations: [PickTeamComponent],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
})
export class PickTeamModule {}