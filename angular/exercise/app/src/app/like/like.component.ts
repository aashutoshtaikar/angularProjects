import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor(private _likesCount: number, private _isSelected: boolean) { 
  }

  ngOnInit() {
  }

  onClick(){
    // if(this.isSelected){
    //   this.likesCount--;
    //   // this.isSelected = false;
    // } else{
    //   this.likesCount++;
    //   // this.isSelected = true;
    // }
    this._likesCount += (this._isSelected) ? -1 : 1;
    this._isSelected = !this._isSelected;
  }

  get likesCount(){
    return this._likesCount;
  }

  get isSelected(){
    return this._isSelected;
  }
}
