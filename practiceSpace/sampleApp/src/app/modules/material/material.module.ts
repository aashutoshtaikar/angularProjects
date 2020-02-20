import {NgModule} from '@angular/core';
import * as Material from '@angular/material'
import { MatIconModule } from '@angular/material';

@NgModule({
  exports: [
    Material.MatTabsModule,
    Material.MatGridListModule,
    Material.MatCardModule,
    Material.MatMenuModule,
    MatIconModule,
    Material.MatButtonModule,
    Material.MatToolbarModule
  ]
})
export class MaterialModule { }
