import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S5ReusableComponentsComponent } from './s5-reusable-components.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [S5ReusableComponentsComponent, FavoriteComponent, PanelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    S5ReusableComponentsComponent
  ]
})
export class S5ReusableComponentsModule { }
