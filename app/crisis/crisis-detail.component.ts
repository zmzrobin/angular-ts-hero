/**
 * Created by zhengmz on 2016/11/23.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CrisisService} from "./crisis.service";
@Component({
    selector:'crisis-detail',
    template: `
    <h3 highlight>Crisis Detail</h3>
    <div>Crisis id: {{id}}</div>
    <br>
    <a routerLink="../list">Crisis List</a>
  `
})
export class CrisisDetailComponent implements OnInit{
   id:number;
    constructor(private crisisService:CrisisService,private route:ActivatedRoute){};
    ngOnInit():void{
       // this.id=this.route.params['id']
        this.id = parseInt(this.route.snapshot.params['id'], 10);
    }
}