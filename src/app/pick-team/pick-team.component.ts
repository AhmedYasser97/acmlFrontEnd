import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pick-team',
  templateUrl: './pick-team.component.html',
  styleUrls: ['./pick-team.component.css']
})
export class PickTeamComponent implements OnInit {

  leagues: Array<any>;

  teams = [
    {
      league: 'EPL',
      team: 'Arsenal'
    },
    {
      league: 'Seria',
      team: 'Juve'
    },
     {
      league: 'Liga',
      team: 'Barca'
    }
  ];

  //indexOfarray2: int;
  public show: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('http://yourdailyfootball.herokuapp.com/api/leagues/')
                 .subscribe((res: any)=> {
                   this.leagues=res.data;
               }
              );
  }

  chooseTeam(element){
  	// for (var i = 0 ; i < array2.length; i++) {
  	// 	if((element.age)==array2[i].age){
  	// 		indexOfarray2 = i;
  	// 	}
  	// }
  	this.show=!this.show;
  }

}
