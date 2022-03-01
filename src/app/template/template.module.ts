import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TemplateComponent } from './template.component';
import { TemplateFormComponent } from './template-form.component';
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
    TemplateComponent,
    TemplateFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CodemirrorModule
  ],
  exports: [
    TemplateComponent,
    TemplateFormComponent
  ] ,
  providers: []
})
export class TemplateModule { }
