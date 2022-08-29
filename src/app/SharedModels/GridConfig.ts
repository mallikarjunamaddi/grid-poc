export class GridConfig {
    GridTitle!: string;
    IsActionsAllowed!: boolean;
    IsActionsEnabled!: boolean;
    Rows!: Array<any>;
    Columns!: Array<GridColumn>;
    RowProperty!: string;
}
export class GridColumn {
    PropertyName!: string;
    Title!: string;
    Class?: string;
    constructor() {
        this.Class = '';
    }
}
