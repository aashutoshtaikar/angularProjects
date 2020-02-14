import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/models/hero.model';
import { HeroService } from './services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour or Heroes';
}






