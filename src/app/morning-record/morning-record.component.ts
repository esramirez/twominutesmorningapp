import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-morning-record',
  templateUrl: './morning-record.component.html',
  styleUrls: ['./morning-record.component.css']
})
export class MorningRecordComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  routingSubscription: any;
  ngOnInit() {
    this.routingSubscription = this.route.params.subscribe( params =>
    {
      console.log(params["id"]);
    });
  }

  ngOndestroy(){
    this.routingSubscription.unsubscribe();
  }


}
