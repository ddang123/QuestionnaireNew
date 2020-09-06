import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../questionnairs';


@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  ngOnInit(): void {
    console.log('9899999999999');
    //throw new Error("Method not implemented.");
  }
  @Input() question: any;
  @Input() form: FormGroup;
  get isValid() { 
    return this.form.valid; 
  }
}


