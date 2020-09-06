export class Question {
    resourceType :string ='Questionnaire'
    status :string ='active';
    url :string;
    subjectType : string[]=['Paitent'];
    date: string;
    items: Item[]= [];

    constructor(options: {
        resourceType?: string;
        status?: string;
        date?: string;
        url?: string;
        subjectType?: string[];
        items?: Item[];
      } = {}) {
        this.resourceType = options.resourceType;
        this.status = options.status || '';
        this.date = options.date || '';
        this.url = options.url || '';

      }

    }


    export class Item {
        linkId: string;
        text: string;
        type: string ;
        options:any[] = [];
        value: any
        constructor(options: {
            linkId?: string;
            text?: string
            type?: string 
            options?: string
            
          } = {}) {
            this.linkId = options.linkId;
            this.text = options.text;
            this.type = options.type ||'text';
          }
    }


    export class CheckBoxItem extends Item {
            "type": string ='checkBox';
    
    }

    export class DateItem extends Item {
        "type": string ='date';

    }

    
    