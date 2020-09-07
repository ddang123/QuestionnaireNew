import { TestBed } from '@angular/core/testing';

import { QuestionControlService  } from './questionControlService .service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { QuestionService } from './QuestionService';

fdescribe('QuestionService', () => {
  beforeEach(() =>{ 
  TestBed.configureTestingModule({
    providers:[HttpClient,HttpHandler], 
  });

  });
  it('should be created', () => {
    const service = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });

  // it('check build response', async () => {
  //   const questionJsonData = JSON.stringify(getjson());
  //   console.log();
  //   //const questionJsonData = require('./questions.json');
  //   const service = TestBed.get(QuestionService);
  //   let questionSpy :jasmine.SpyObj<QuestionService>;
  //   const spy = jasmine.createSpyObj('QuestionService',['getQuestionsHttp']);
  //   questionSpy = TestBed.get(QuestionService);
  //   questionSpy.getQuestionsHttp.and.returnValue(questionJsonData);
  //   service.load().then((result) => {

  //     console.log();
  //     // expect(apiService.fetchData).toHaveBeenCalledWith(video);
  //     // expect(result).toEqual(promisedData);
  //   });
  //   //expect(service).toBeTruthy();
  // });

  it('check build response', async () => {
    const questionJsonData = getjson();
    console.log();
    const service = TestBed.get(QuestionService);
    let res = service.buildResponse(questionJsonData);
    expect(res.items.length).toEqual(3);
    expect(res.items[0].options[0].type).toEqual('checkBox');

  });


});

export function getjson(){
  return {
    "resourceType": "Questionnaire",
    "id": "f201",
    "url": "http://hl7.org/fhir/Questionnaire/f201",
    "status": "active",
    "subjectType": [
      "Patient"
    ],
    "date": "2010",
    "item": [
      {
        "linkId": "1",
        "text": "Do you have allergies?",
        "type": "boolean"
      },
      {
        "linkId": "2",
        "text": "General questions",
        "type": "group",
        "item": [
          {
            "linkId": "2.1",
            "text": "What is your gender?",
            "type": "string"
          },
          {
            "linkId": "2.2",
            "text": "What is your date of birth?",
            "type": "date"
          },
          {
            "linkId": "2.3",
            "text": "What is your country of birth?",
            "type": "string"
          },
          {
            "linkId": "2.4",
            "text": "What is your marital status?",
            "type": "string"
          }
        ]
      },
      {
        "linkId": "3",
        "text": "Intoxications",
        "type": "group",
        "item": [
          {
            "linkId": "3.1",
            "text": "Do you smoke?",
            "type": "boolean"
          },
          {
            "linkId": "3.2",
            "text": "Do you drink alchohol?",
            "type": "boolean"
          }
        ]
      }
    ]
  }
}
