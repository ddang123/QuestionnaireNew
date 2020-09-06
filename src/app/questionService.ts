import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { Question, Item, CheckBoxItem, DateItem } from './questionnairs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  filePath = 'assets/questions.json';
  private questions: any;
  constructor(private http: HttpClient) { }

 

  getQuestionsHttp() {
    return this.http.get<any>(this.filePath)
     
  }

  getQuestions(){
      return this.questions;
  }


  buildQuestions(){
     this.getQuestionsHttp().subscribe((data: any) => {
        let q = new Question();
        q.date = data.date;;
        q.resourceType = data.resourceType;
        q.status = data.status ;
        q.subjectType = data.subjectType ;
        q.url = data.url;
        data.item.forEach(element => {
        let itm = new Item({linkId:element.linkId,type:element.type,text:element.text });
        if("boolean"===element.type){
                let optionItem = new CheckBoxItem({linkId:element.linkId,text:element.text });
                optionItem.value = false;
                itm.options.push(itm);
                q.items.push(itm);
              }
          if("group"===element.type){           
            element.item.forEach(thisItem => {
            let optionItem = 'text'===thisItem.type?new Item({linkId:thisItem.linkId,text:thisItem.text }):
                        new CheckBoxItem({linkId:thisItem.linkId,text:thisItem.text });;

            optionItem.value = '';
            itm.options.push(optionItem);
            });
            q.items.push(itm);
          }
          else{
            throwError("bad.....")
          }
          
  
        });
        this.questions = q;
        console.log();
  
    },
        (err: any) => console.log(err));
    } 

    load(): Promise<any> {
        return this.getQuestionsHttp()
        .toPromise()
        .then(
          data => {
        this.questions = this.buildResponse(data);
        console.log();
          }
        )
      }

      buildResponse(data){
        let q = new Question();
        q.date = data.date;;
        q.resourceType = data.resourceType;
        q.status = data.status ;
        q.subjectType = data.subjectType ;
        q.url = data.url;
        data.item.forEach(element => {
        let itm = new Item({linkId:element.linkId,type:element.type,text:element.text});
        itm.type = element.type;
        if("boolean"===element.type){
                let optionItem = new CheckBoxItem({linkId:element.linkId,text:element.text });
                optionItem.value = false;
                itm.options.push(optionItem);
                q.items.push(itm);
        }
          if("group"===element.type){           
            element.item.forEach(thisItem => {
                let optionItem :Item;
                switch(thisItem.type) { 
                    case 'string': { 
                        optionItem = new Item({linkId:thisItem.linkId,text:thisItem.text }); 
                        optionItem.value = '';
                       break; 
                    } 
                    case 'boolean': { 
                        optionItem = new CheckBoxItem({linkId:thisItem.linkId,text:thisItem.text });
                        optionItem.value = ''; 
                       break; 
                    }
                    case 'date': { 
                        optionItem = new DateItem({linkId:thisItem.linkId,text:thisItem.text }); 
                        optionItem.value = '';
                       break; 
                    }  
                    default: { 
                       //statements; 
                       break; 
                    } 
                 }

            itm.options.push(optionItem);
            });
            q.items.push(itm);
          }
          else{
            throwError("bad.....")
          }
          
  
        });
        console.log();
        return q;
        }
    }
  

  export function ContextServiceFactory(contextService: QuestionService) {
    return () => contextService.load();
  }


