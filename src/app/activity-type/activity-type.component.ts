import { Component, OnInit } from '@angular/core';
import { GridConfig } from '../SharedModels/GridConfig';

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.scss']
})
export class ActivityTypeComponent implements OnInit {
  gridConfig: GridConfig;
  selectedItem: any;
  enableEditPopup: boolean;
  enableRemovePopup: boolean;

  constructor() {
    this.gridConfig = {
      GridTitle: "Activity Type",
      IsActionsAllowed: true,
      IsActionsEnabled: true,
      RowProperty: 'Id',
      Rows: [
        { Id: 545, Value: '1-Initial Asesmnt and prep-2wek iter Srv', Code: 'ESSANH', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 500, Value: '2-Initial Assess and prep-2week iter Srv', Code: 'ESSSNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 501, Value: '3-Initial Assess and prep-2week iter', Code: 'ESSBSK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 510, Value: '4-Initial Assess and prep-2week iter Srv', Code: 'DSSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 511, Value: '5-Initial Assess and prep-2week iter Srv', Code: 'FSSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 521, Value: '6-Initial Assess and prep-2week iter Srv', Code: 'GSSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 512, Value: '7-Initial Assess and prep-2week iter Srv', Code: 'HSSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 513, Value: '8-Initial Assess and prep-2week iter', Code: 'ETSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 514, Value: '9-Initial Assess and prep-2week iter', Code: 'ENSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
      ],
      Columns: [
        { PropertyName: 'Id', Title: 'Activity Type Id', Class: 'codeCol' },
        { PropertyName: 'Value', Title: 'Activity Type Name', Class: 'codeCol' },
        { PropertyName: 'Code', Title: 'Code', Class: 'codeCol' },
        { PropertyName: 'ActivityTypeCategoryName', Title: 'Activity Type Category', Class: 'codeCol' },
        { PropertyName: 'IsCostRateRegistrationAllowed', Title: 'Is Cost Rate Registration Allowed', Class: 'codeCol' },
      ]
    };

    this.enableEditPopup = false;
    this.enableRemovePopup = false;
  }

  ngOnInit(): void {
  }

  cancelEditActivityType() {
    this.enableEditPopup = false;
  }

  cancelRemoveActivityType() {
    this.enableRemovePopup = false;
  }

  deleteById(rowId: number) {
    this.enableEditPopup = false;
    this.enableRemovePopup = true;
    this.selectedItem = this.gridConfig.Rows.filter(x => x[this.gridConfig.RowProperty] == rowId)[0];
  }

  editById(rowId: number) {
    this.enableEditPopup = true;
    this.enableRemovePopup = false;
    this.selectedItem = this.gridConfig.Rows.filter(x => x[this.gridConfig.RowProperty] == rowId)[0];
  }
}