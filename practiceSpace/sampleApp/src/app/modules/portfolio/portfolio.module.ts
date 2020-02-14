import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { MaterialModule } from '../material/material.module';

import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [PortfolioComponent, ProjectsComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[PortfolioComponent]
})
export class PortfolioModule { }
