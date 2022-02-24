import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from './template.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/lib/codemirror';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CodemirrorModule
  ],
  exports: [
    TemplateComponent
  ] ,
  providers: []
})
export class TemplateModule { }
