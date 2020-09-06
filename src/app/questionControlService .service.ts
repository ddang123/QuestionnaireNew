import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService  {
  filePath = 'assets/resources/codetableDefnition.json';
  constructor(private http: HttpClient) { }
 
  getQuestions() {
    this.http.get<any>(this.filePath)
            .subscribe((data: any) => {
                return data;
                //console.log();
            },
                (err: any) => console.log(err));
    }

    toFormGroup(questions) {
      const group: any = {};
  
      questions.forEach(question => {
        question.options.forEach(element => {
          group[element.linkId] =  new FormControl(element.value || '', Validators.required); 
        });
        
      });
      return new FormGroup(group);
    }

}
