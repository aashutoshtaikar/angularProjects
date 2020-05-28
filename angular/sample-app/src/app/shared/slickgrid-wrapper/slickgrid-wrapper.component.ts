import { Component, OnInit } from '@angular/core';
import { AngularSlickgridModule, Column, GridOption, FieldType, Editors, AngularGridInstance, Formatters, OnEventArgs, EditorValidator, EditorArgs } from 'angular-slickgrid';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ErrorDialogService } from '../services/error-dialog/error-dialog.service';

const duplicateDateSgValidator: EditorValidator = (value: any, args: EditorArgs) => {
  const grid = args && args.grid;
  const data = grid.getData();
  const items = data.getItems();

  let enteredDate = new Date(value).toISOString().split('T')[0];
  let currentItem = args.item;

  const itemContainingDate = items.find(item => {
    if (item.id != currentItem.id) {
      let dateFromRow = new Date(item.start).toISOString().split('T')[0];
      return dateFromRow === enteredDate;
    }
  });
  // console.log('validator:',args, grid, data, items);
  // console.log('duplicate item:', containsDate);
  if (itemContainingDate) {
    return { valid: false, msg: `error saving data point, data for ${itemContainingDate.start} already exists` };
  }
  return { valid: true };
};


@Component({
  selector: 'slickgrid-wrapper',
  templateUrl: './slickgrid-wrapper.component.html',
  styleUrls: ['./slickgrid-wrapper.component.css'],
  providers: [DatePipe]
})
export class SlickgridWrapperComponent implements OnInit {
  angularGrid: AngularGridInstance;
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];
  gridObj: any;
  alertWarning: any;
  isAutoEdit: boolean = true;
  private _commandQueue = [];

  constructor(
    // private translate: TranslateService
    // private datePipe: DatePipe
    private errorDialogService: ErrorDialogService
  ) {
    this.prepareGrid();
  }

  ngOnInit(): void {
  }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
    this.gridObj = angularGrid.slickGrid;
    this.gridObj.onKeyDown.subscribe((e) => {
      if (e.which == 46) {
        var selectedData = [];
        let selectedRowIds = this.gridObj.getSelectedRows();
        selectedRowIds.forEach((value) => {
          selectedData.push(this.gridObj.getDataItem(value));
        });
        this.angularGrid.gridService.deleteItems(selectedData);
      }
    });

    this.gridObj.onValidationError.subscribe((e,args) => {
      //use this message to pop up error
      console.log(args.validationResults.msg);
      this.errorDialogService.openPopUpError(args.validationResults.msg);
    });
  }

  onCellChanged(e, args) {
    // this.updatedObject = args.item;
    console.log('onCellChanged', e, args);
    this.angularGrid.resizerService.resizeGrid(10);
  }

  onCellClicked(e, args) {
    console.log('onCellClicked', e, args);
    // do something
  }

  prepareGrid() {
    this.columnDefinitions = [
      {
        id: 'edit',
        field: 'id',
        width: 100,
        excludeFromColumnPicker: true,
        excludeFromGridMenu: true,
        excludeFromHeaderMenu: true,
        formatter: Formatters.editIcon,
        minWidth: 30,
        maxWidth: 30,
        // use onCellClick OR grid.onClick.subscribe which you can see down below
        onCellClick: (e: Event, args: OnEventArgs) => {
          console.log(args);
          ////WIP
          // this.alertWarning = `Editing: ${args.dataContext.title}`;
          // this.angularGrid.gridService.highlightRow(args.row, 1500);
          // let c = this.angularGrid.gridService.getSelectedRows();
          // console.log(c);
          // c.push(args.row);
          // this.angularGrid.gridService.setSelectedRows(c);
          // console.log(this.angularGrid.gridService.getSelectedRows());
        },
      }, {
        id: 'delete',
        field: 'id',
        excludeFromColumnPicker: true,
        excludeFromGridMenu: true,
        excludeFromHeaderMenu: true,
        formatter: Formatters.deleteIcon,
        minWidth: 30,
        maxWidth: 30,
        // use onCellClick OR grid.onClick.subscribe which you can see down below
        onCellClick: (e: Event, args: OnEventArgs) => {
          this.alertWarning = `Deleting: ${args.dataContext.title}`;
          this.angularGrid.gridService.deleteItem(this);
        }

      },
      {
        id: 'title',
        name: 'Title',
        field: 'title',
        filterable: true,
        minWidth: 100,
        width: 10,
        sortable: true,
        type: FieldType.string,
        editor: {
          model: Editors.longText,
          required: true
        }
      },
      {
        id: 'duration',
        name: 'Duration (days)',
        field: 'duration',
        sortable: true,
        type: FieldType.number,
        editor: {
          model: Editors.integer
        },
        width: 10
      },
      {
        id: '%',
        name: '% Complete',
        field: 'percentComplete',
        sortable: true,
        type: FieldType.float,
        formatter: Formatters.decimal,
        editor: {
          model: Editors.text,
          minValue: 0,
          maxValue: 100
        },
        width: 10
      },
      {
        id: 'start',
        name: 'Start',
        field: 'start',
        editor: {
          model: Editors.date,
          required: true,
          validator: duplicateDateSgValidator,
          title: 'test error'
        },
        type: FieldType.date,
        formatter: Formatters.dateIso,
        maxWidth: 100,
        onCellChange: (e: Event, args: OnEventArgs) => {
          // do something
          console.log(args.dataContext.title);
        }
      },
      {
        id: 'finish',
        name: 'Finish',
        field: 'finish',
        editor: {
          model: Editors.date,
          required: true
        },
        type: FieldType.date,
        formatter: Formatters.dateIso,
        maxWidth: 100
      },
    ];

    this.gridOptions = {
      asyncEditorLoading: false,
      autoEdit: this.isAutoEdit,
      autoCommitEdit: false,
      autoResize: {
        containerId: 'demo-container',
        sidePadding: 10
      },
      editable: true,
      enableCellNavigation: true,
      enableColumnPicker: true,
      enableExcelCopyBuffer: true,
      enableFiltering: true,
      editCommandHandler: (item, column, editCommand) => {
        this._commandQueue.push(editCommand);
        editCommand.execute();
      },
      // rowSelectionOptions: {
      //   // True (Single Selection), False (Multiple Selections)
      //   selectActiveRow: false
      // },
      // enableCheckboxSelector: true,
      // enableRowSelection: true,
      // preselectedRows: [0, 2],
      // i18n: this.translate
    };

    // fill the dataset with your data
    this.dataset = this.mockData(30);
  }

  popUpError(e,args){
    console.log(e,args);
  }

  mockData(itemCount, startingIndex = 0) {
    // mock a dataset
    const tempDataset = [];
    for (let i = startingIndex; i < (startingIndex + itemCount); i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomFinishYear = (new Date().getFullYear() - 3) + Math.floor(Math.random() * 10); // use only years not lower than 3 years ago
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));
      const randomPercent = Math.round(Math.random() * 100);
      const randomFinish = new Date(randomFinishYear, (randomMonth + 1), randomDay);

      tempDataset.push({
        id: i,
        title: 'Task ' + i,
        duration: (i % 33 === 0) ? null : Math.round(Math.random() * 100) + '',
        percentComplete: randomPercent,
        start: new Date(randomYear, randomMonth, randomDay),
        finish: randomFinish < new Date() ? '' : randomFinish, // make sure the random date is earlier than today


      });
    }
    return tempDataset;
  }

}
