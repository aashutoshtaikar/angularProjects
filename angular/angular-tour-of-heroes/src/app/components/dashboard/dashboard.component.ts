import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/models/hero.model';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    // this.heroService.getHeroesSlowly()
    //   .then(response => this.heroes = response.slice(1, 5));
    this.heroService.getHeroesSlowlyObs()
      .subscribe(response=>this.heroes = response.slice(1,5));
  }
}
