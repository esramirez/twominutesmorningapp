import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Morning } from '../logic/MorningRecord';

@Component({
  selector: 'app-morning-record',
  templateUrl: './morning-record.component.html',
  styleUrls: ['./morning-record.component.css']
})
export class MorningRecordComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  morning: Morning;
  routingSubscription: any;
  ngOnInit() {

    this.morning = new Morning();
    this.routingSubscription = this.route.params.subscribe( params =>
    {
      console.log(params["id"]);
    });
  }

  ngOndestroy(){
    this.routingSubscription.unsubscribe();
  }


}
