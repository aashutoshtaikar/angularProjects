import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { ErrorDialogService } from './shared/services/error-dialog/error-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  dialogRef: MatDialogRef<ErrorDialogComponent>;
    
  constructor(
    //for popping out dialog
    public dialog: MatDialog,
    private errorDialogService: ErrorDialogService) { }

  ngOnInit() {
    this.errorDialogService.validationError.subscribe(msg => {
      console.log(msg);

      this.dialogRef = this.dialog.open(ErrorDialogComponent, {
        data: {msg: msg},
        width: '500px',
        height: '200px'
      });
    });
  }

}
