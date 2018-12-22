import { Component, OnInit } from '@angular/core';
import { MorningrecordsService } from '../services/morningrecords.service';
import { Morning } from '../logic/MorningRecord';

@Component({
  selector: 'app-list-morning-record',
  templateUrl: './list-morning-record.component.html',
  styleUrls: ['./list-morning-record.component.css']
})
export class ListMorningRecordComponent implements OnInit {

  constructor(private data: MorningrecordsService) { }
  recordList: [Morning];
  ngOnInit() {

    this.data.getMorningRecords( list => {
      this.recordList = list;
    });
  }

}
