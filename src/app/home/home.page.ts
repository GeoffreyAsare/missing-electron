import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { TournamentsPage } from '../tournaments/tournaments.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  goTournament() {
    this.router.navigate(['/tournaments'])
  }

}
