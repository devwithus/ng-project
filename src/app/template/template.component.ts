import { Component, OnInit } from '@angular/core';

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
