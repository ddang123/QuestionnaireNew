import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../questionnairs';
import { QuestionService } from '../QuestionService';
import { QuestionControlService } from '../questionControlService .service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit , OnDestroy{

  questions: [];
  form: FormGroup;
  payLoad = '';
  result = '';

  constructor(private qcs: QuestionControlService, private service: QuestionService) { 

   }
  ngOnDestroy(): void {

  }

  ngOnInit() {
    this.questions = this.service.getQuestions().items;
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.result = JSON.stringify(this.questions)
  }
}
