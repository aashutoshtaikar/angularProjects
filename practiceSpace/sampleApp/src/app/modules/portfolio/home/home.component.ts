import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

}
