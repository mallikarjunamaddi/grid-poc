import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridConfig } from '../SharedModels/GridConfig';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() gridConfig!: GridConfig;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(rowId: number) {
    this.delete.emit(rowId);
  }

  onEdit(rowId: number) {
    this.edit.emit(rowId);
  }

}