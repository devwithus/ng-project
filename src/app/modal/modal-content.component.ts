import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'modal-content',
    template: `
      <div class="modal-header">
        <h4 class="modal-title pull-left">{{title}}</h4>
        <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
          <span aria-hidden="true" class="visually-hidden">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{content}}
        <app-template-form></app-template-form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">OK</button>
      </div>
    `
  })
  
  export class ModalContentComponent implements OnInit {
    title?: string;
    content?: any;
  
    constructor(public bsModalRef: BsModalRef) {}
  
    ngOnInit() {

    }
  }