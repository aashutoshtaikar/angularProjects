import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/models/hero.model';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroService.getHeroes().then(responseHeroes => this.heroes = responseHeroes);
    this.heroService.getHeroesSlowly().then(response => this.heroes = response);
  }

}
