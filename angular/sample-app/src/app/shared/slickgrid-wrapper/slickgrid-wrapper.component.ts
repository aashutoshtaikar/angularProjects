import { Component, OnInit } from '@angular/core';
import { AngularSlickgridModule, Column, GridOption } from 'angular-slickgrid';
@Component({
  selector: 'slickgrid-wrapper',
  templateUrl: './slickgrid-wrapper.component.html',
  styleUrls: ['./slickgrid-wrapper.component.css']
})
export class SlickgridWrapperComponent {

  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];

  constructor() {
    this.prepareGrid();
  }

  prepareGrid() {
    this.columnDefinitions = [
      { id: 'title', name: 'Title', field: 'title', sortable: true },
      { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true },
      { id: '%', name: '% Complete', field: 'percentComplete', sortable: true },
      { id: 'start', name: 'Start', field: 'start' },
      { id: 'finish', name: 'Finish', field: 'finish' },
    ];

    this.gridOptions = {
      enableAutoResize: true,
      enableSorting: true
    };

    // fill the dataset with your data
    this.dataset = [ /** ...your data... **/ ];
  }

}
