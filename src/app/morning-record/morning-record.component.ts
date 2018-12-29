import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Morning } from '../logic/MorningRecord';
import { MorningrecordsService } from '../services/morningrecords.service';

@Component({
  selector: 'app-morning-record',
  templateUrl: './morning-record.component.html',
  styleUrls: ['./morning-record.component.css']
})
export class MorningRecordComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataservice: MorningrecordsService ) { }
  morning: Morning;
  routingSubscription: any;

  cancel(){
    this.router.navigate(["/"])
  }

  save(){
    this.dataservice.saveMorningRecord(this.morning, result => {
      if(result){
        this.router.navigate(["/"]);
      }
    })
  }

  ngOnInit() {

    this.morning = new Morning();
    this.routingSubscription = this.route.params.subscribe(
      params => {
        console.log(params["id"]);
        if(params["id"]){
          this.dataservice.get(params["id"], 
            response => {
              this.morning = response;
            })
        }
      });
  }

  ngOndestroy(){
    this.routingSubscription.unsubscribe();
  }


}
