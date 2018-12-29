import { Injectable } from '@angular/core';
import { Morning } from '../logic/MorningRecord';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MorningrecordsService {

  constructor(private http: HttpClient) { }
  public endpoint = "http://localhost:3000/";

  get(morningId: string, callback){
    this.http.get(`${this.endpoint}tmm/${morningId}`)
      .subscribe( response => {
        callback(response);

      })
  }
  getMorningRecords(callback){
/*     const records = [
            new Morning("answer to question 1","answer to question 2",
                          "answer to question 3", new Date()),
            new Morning("Another answer to question 1"," Another answer to question 2",
                          "Another answer to question 3", new Date()),
            new Morning("Boring answer to question 1"," Boring answer to question 2",
                          "Boring answer to question 3", new Date())
          ];

      callback(records); */
      this.http.get(`${this.endpoint}tmm`)
      .subscribe(response => {
        console.log(response)
        callback(response);
          })
  }

  saveMorningRecord(morning, callback){
       console.log(morning);
       if(morning._id){
         //update
         console.log("updating beacuse i got an id of: ");
         this.http.put(`${this.endpoint}tmm/${morning._id}`,morning)
         .subscribe( response => {
           callback(true);
         })
       }
       else
       {
        console.log("adding a new record");
        this.http.post(`${this.endpoint}tmm/`,morning)
        .subscribe( response => {
          callback(true);
        })
       }
    
  }
}
