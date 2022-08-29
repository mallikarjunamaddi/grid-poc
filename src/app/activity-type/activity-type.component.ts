import { Component, OnInit } from '@angular/core';
import { GridConfig } from '../SharedModels/GridConfig';

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.scss']
})
export class ActivityTypeComponent implements OnInit {
  gridConfig: GridConfig;

  constructor() {
    this.gridConfig = {
      GridTitle: "Activity Type",
      IsActionsAllowed: true,
      IsActionsEnabled: true,
      RowProperty: 'Id',
      Rows: [
        { Id: 545, Value: '1-Initial Asesmnt and prep-2wek iter Srv', Code: 'ESSBNH', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 500, Value: '1-Initial Assess and prep-2week iter Srv', Code: 'ESSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true },
        { Id: 501, Value: '1-Initial Assess and prep-2week iter Srv', Code: 'ESSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true }
      ],
      Columns: [
        { PropertyName: 'Id', Title: 'Activity Type Id', Class: 'codeCol' },
        { PropertyName: 'Value', Title: 'Activity Type Name', Class: 'codeCol' },
        { PropertyName: 'Code', Title: 'Code', Class: 'codeCol' },
        { PropertyName: 'ActivityTypeCategoryName', Title: 'Activity Type Category', Class: 'codeCol' },
        { PropertyName: 'IsCostRateRegistrationAllowed', Title: 'Is Cost Rate Registration Allowed', Class: 'codeCol' },
      ]
    }
  }

  ngOnInit(): void {
  }

  deleteById(rowId: number) {
    this.gridConfig.Rows = this.gridConfig.Rows.filter(x => x[this.gridConfig.RowProperty] != rowId);
  }

  editById(rowId: number) {
    console.log(rowId);
  }
}
