import { Component, OnInit } from '@angular/core';
import { AngularSlickgridModule, Column, GridOption, FieldType, Editors, AngularGridInstance, Formatters, OnEventArgs, EditorValidator, EditorArgs } from 'angular-slickgrid';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { ErrorDialogService } from '../../services/error-dialog/error-dialog.service';

const duplicateDateSgValidator: EditorValidator = (value: any, args: EditorArgs) => {
  console.log(value);
  const grid = args && args.grid;
  const data = grid.getData();
  const items = data.getItems();

  let enteredDate = new Date(value).toISOString().split('T')[0];
  console.log('enteredDate:', enteredDate);
  let currentActiveItem = args.item;

  const itemContainingDate = items.find(item => {
    console.log(item);
    //if editing manually
    // console.log('currentItem and item', currentItem, item);
    if (item.start) {
      if (currentActiveItem) {
        if (item.id != currentActiveItem.id) {
          let dateFromRow = new Date(item.start).toISOString().split('T')[0];
          return dateFromRow === enteredDate;
        }
      }
      else { // if pasting from excel
        let dateFromRow = new Date(item.start).toISOString().split('T')[0];
        return dateFromRow === enteredDate;
      }      
    }


  });
  // console.log('validator:', args, grid, data, items);
  // console.log('duplicate item:', itemContainingDate);
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
  updatedObject: any;
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
        console.log(selectedRowIds);
        selectedRowIds.forEach((value) => {
          selectedData.push(this.gridObj.getDataItem(value));
        });
        console.log('deleting selected', selectedData);
        this.angularGrid.gridService.deleteItems(selectedData);
      }
    });

    this.gridObj.onValidationError.subscribe((e, args) => {
      //use this message to pop up error
      console.log(args.validationResults.msg);
      this.errorDialogService.openPopUpError(args.validationResults.msg);
    });
  }

  onCellChanged(e, args) {
    const metadata = this.angularGrid.gridService.getColumnFromEventArguments(args);

    console.log(metadata);
    this.updatedObject = args.item;
  }

  onCellClicked(e, args) {
    const metadata = this.angularGrid.gridService.getColumnFromEventArguments(args);

    // when a cell is clicked, remove highlight
    this.gridObj.setSelectedRows([]); // remove highlight
    //event.preventDefault();

    console.log('onCellClicked', metadata);

    if (metadata.columnDef.id === 'edit') {
      this.alertWarning = `open a modal window to edit: ${metadata.dataContext.title}`;

      // highlight the row, to customize the color, you can change the SASS variable $row-highlight-background-color
      this.angularGrid.gridService.highlightRow(args.row, 1500);

      // you could also select the row, when using "enableCellNavigation: true", it automatically selects the row
      // this.angularGrid.gridService.setSelectedRow(args.row);
    } else if (metadata.columnDef.id === 'delete') {
      if (confirm('Are you sure?')) {
        this.angularGrid.gridService.deleteItemById(metadata.dataContext.id);
      }
    }
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
        // onCellClick: (e: Event, args: OnEventArgs) => {
        //   this.alertWarning = `Deleting: ${args.dataContext.title}`;
        //   this.angularGrid.gridService.deleteItem(this);
        // }

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
          model: Editors.text,
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
          // minValue: 0, //wont work
          // maxValue: 100
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
          validator: duplicateDateSgValidator
          // title: 'test error'
        },
        type: FieldType.dateUs,
        formatter: Formatters.dateUs,
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
        type: FieldType.dateUs,
        formatter: Formatters.dateUs,
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
      // enableFiltering: true,
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

  addBlankRow(): void {
    console.log('Adding blank row');
    console.log(this.dataset);
    let allIds: number[] = this.dataset.map(data => <number>(data.id));
    let newRowIndex = 0;
    if (allIds.length>0) {
      allIds.sort((a, b) => b - a);      
      newRowIndex = allIds[0] + 1;
    }

    const tempDataset = [];
    tempDataset.push({ id: newRowIndex });
    this.angularGrid.gridService.addItem(tempDataset[0], {position: 'bottom'});
  }

  popUpError(e, args) {
    console.log(e, args);
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
