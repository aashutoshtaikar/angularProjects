import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from 'src/models/hero.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}
