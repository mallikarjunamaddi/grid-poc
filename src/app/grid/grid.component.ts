import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  gridTitle: string;
  rows: Array<any>;
  Id: string = 'Id'
  columns: Array<GridColumn>;
  constructor() {
    this.gridTitle = "Activity Type";
    this.rows = [
      { Id: 545, Value: '1-Initial Asesmnt and prep-2wek iter Srv', Code: 'ESSBNH', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true, Edit: 'Edit', Remove: 'Remove' },
      { Id: 500, Value: '1-Initial Assess and prep-2week iter Srv', Code: 'ESSBNK', ActivityTypeCategoryName: 'Service Based', IsCostRateRegistrationAllowed: true, Edit: 'Edit', Remove: 'Remove' },
    ];
    this.columns = [
      { PropertyName: 'Id', Title: 'Activity Type Id', Class: 'codeCol' },
      { PropertyName: 'Value', Title: 'Activity Type Name' },
      { PropertyName: 'Code', Title: 'Code', Class: 'actionCol' },
      { PropertyName: 'ActivityTypeCategoryName', Title: 'Activity Type Category', Class: 'codeCol' },
      { PropertyName: 'IsCostRateRegistrationAllowed', Title: 'Is Cost Rate Registration Allowed', Class: 'codeCol' },
      { PropertyName: 'Edit', Title: 'Edit', Class: 'actionCol' },
      { PropertyName: 'Remove', Title: 'Remove', Class: 'actionCol' },
    ]
  }

  ngOnInit(): void {
  }



}

export class GridColumn {
  PropertyName!: string;
  Title!: string;
  Class?: string;
  constructor() {
    this.Class = '';
  }
}
