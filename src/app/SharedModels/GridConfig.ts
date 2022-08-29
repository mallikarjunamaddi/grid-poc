export class GridConfig {
    GridTitle!: string; //Gird Summary
    IsActionsAllowed!: boolean; //Edit and Remove Actions
    IsActionsEnabled!: boolean; //To enable or disable the Actions.
    Rows!: Array<any>; //Data  Rows
    Columns!: Array<GridColumn>; //Columns List
    RowProperty!: string; //Primary Key item in the columns
}
export class GridColumn {
    PropertyName!: string; //Json Property name
    Title!: string; //Column header
    Class?: string; //CSS Class
    constructor() {
        this.Class = '';
    }
}
