import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated

  /**
   * - ViewEncapsulation.Emulated => default => Emulates Shadow dom (most browsers dont support so this helps)
   *    ng-content-cX => angular attaches the attribute, used to post process css rule
   * 
   * - ViewEncapsulation.Native => Uses native shadow dom capability from browser (chrome v53+)
   * 
   * - ViewEncapsulation.None =>  Styles defined in this component will leak outside the component 
   * 
   */
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  @Output() myCustomEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.myCustomEvent.emit(this.isFavorite);
  }

}
