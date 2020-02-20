import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input('title') title:string = "zippy Component demo";
  @Output() someEvent = new EventEmitter();
  constructor(private todo: UserService) { }

  ngOnInit() {
  }

  onClick(){
    this.someEvent.emit(this.title);
  }

}
