import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { PickTeamComponent } from './pick-team.component';

@NgModule({
  imports: [ HttpClientModule, CommonModule, FormsModule ],
  declarations: [PickTeamComponent],
  providers: []
})
export class PickTeamModule {}