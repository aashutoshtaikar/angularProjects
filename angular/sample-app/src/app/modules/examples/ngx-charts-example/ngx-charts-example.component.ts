import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'ngx-charts-example',
  templateUrl: './ngx-charts-example.component.html',
  styleUrls: ['./ngx-charts-example.component.css']
})
export class NgxChartsExampleComponent implements OnInit {

  multi: any[];
  view: any[] = [600, 350];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Dollars';
  yAxisLabel: string = 'Date';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
   }

  ngOnInit() {
  }
  
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
