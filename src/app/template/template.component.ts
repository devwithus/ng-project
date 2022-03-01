import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { ModalContentComponent } from '../modal/modal-content.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  content:any;

  readonly codeMirrorOptions: any = {
    theme: 'idea',
    mode: 'application/ld+json',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  constructor(private modalService: BsModalService){
  }


  openModalWithComponent(message: string) {
    const initialState: ModalOptions = {
      initialState: {
        content: '<app-template-form></app-template-form>',
        title: 'Modal with component'
      }
    };
   this.modalService.show(ModalContentComponent, initialState);
  }

  ngOnInit(){
    this.content = JSON.stringify({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "title": "Object",
      "additionalProperties": false,
      "properties": {
        "string": {
          "type": "string",
          "title": "String"
        }
      }
    }, null, ' ');
  }
  
  setEditorContent() {
    console.log(this.content);
  }

}
