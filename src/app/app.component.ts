import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Question, Item } from './questionnairs';
import { QuestionService } from './QuestionService';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2 id='title-question'>Questionnaire</h2>
      <app-dynamic-form ></app-dynamic-form>
    </div>
  `
})
export class AppComponent {
  questions$: Observable<any>;

  constructor(service: QuestionService) {
    console.log()
  }
}