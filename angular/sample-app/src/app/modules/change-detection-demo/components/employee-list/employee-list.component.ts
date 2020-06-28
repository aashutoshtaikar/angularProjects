import { Component, OnInit, Input, SimpleChanges, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { Employee } from '../../change-detection-demo.component';

@Component({
  selector: 'cdd-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees: Employee[];
  private differ: KeyValueDiffer<string, any>;
  constructor(private differs: KeyValueDiffers) { }

  ngOnInit() {
    this.differ = this.differs.find(this.employees).create();
    console.log(this.employees);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.employees);
    if (changes.employees) {
      console.log(this.employees);
    }
  }

  ngDoCheck(){
    let keyValueChanges = this.differ.diff(this.employees);
    if (keyValueChanges) {
      console.log('keyValuechanges', keyValueChanges);
      keyValueChanges.forEachChangedItem(changedItem=>{
        console.log('changed Item:', changedItem);
        if (changedItem.key==='id') {
          console.log("change detedted on new id");
        }
      })
    }
  }

}
