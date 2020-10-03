import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's7-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(val){
    console.log(val);
  }
}
