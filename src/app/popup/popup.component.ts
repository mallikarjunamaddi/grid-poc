import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopupTypeEnum } from '../SharedModels/Enums/PopupTypeEnum';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() title!: string;
  @Input() type!: PopupTypeEnum;
  @Output() close = new EventEmitter();
  popupType = PopupTypeEnum;
  modalClassConfig!: object;

  constructor() {

  }

  ngOnInit(): void {
    this.modalClassConfig = {
      'add-modal': this.type === this.popupType.ADD,
      'edit-modal': this.type === this.popupType.EDIT,
      'remove-modal': this.type === this.popupType.DELETE
    }
  }

  closePopup() {
    this.close.emit();
  }
}
