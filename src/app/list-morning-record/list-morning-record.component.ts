import { Component, OnInit } from '@angular/core';
import { MorningrecordsService } from '../services/morningrecords.service';
import { Morning } from '../logic/MorningRecord';
import { Router } from '@angular/router';
import {catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-list-morning-record',
  templateUrl: './list-morning-record.component.html',
  styleUrls: ['./list-morning-record.component.css']
})
export class ListMorningRecordComponent implements OnInit {

  recordList: [Morning];
  
  constructor(private data: MorningrecordsService,
              private router: Router) { }
  
  getDetails(morning: Morning){
    console.log("Go to the details...: " + morning._id)
    this.router.navigate(["/morning",morning._id])

  }
  share(morning: Morning){
    console.log("in Share function")
    const shareText = "this is my 2 minutes morning thought";
    if('share' in navigator){
      console.log("in Navigator");

      (navigator as any).share()({
        title: morning.question1,
        text: shareText,
        url: window.location.href
       }).pipe(console.log("shared"),catchError(this.errorHandler))
       
         
    }
    else
    {
      console.log("in whatsapp")
      const shareUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareUrl;
    }

  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
  ngOnInit() {

    this.data.getMorningRecords( recordList => {
      this.recordList = recordList;
      
    });
  }

}
