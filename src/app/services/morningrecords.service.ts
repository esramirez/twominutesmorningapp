import { Injectable } from '@angular/core';
import { Morning } from '../logic/MorningRecord';

@Injectable({
  providedIn: 'root'
})
export class MorningrecordsService {

  constructor() { }

  getMorningRecords(callback){
    const records = [
            new Morning("answer to question 1","answer to question 2",
                          "answer to question 3", new Date()),
            new Morning("Another answer to question 1"," Another answer to question 2",
                          "Another answer to question 3", new Date()),
            new Morning("Boring answer to question 1"," Boring answer to question 2",
                          "Boring answer to question 3", new Date())
          ];

      callback(records);
  }

  saveMorningRecord(Morning, callback){
      callback(true);
  }
}
