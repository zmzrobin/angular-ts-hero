/**
 * Created by zhengmz on 2016/11/23.
 */
import {Component, OnInit} from "@angular/core";
import {Crisis, CrisisService} from "./crisis.service";

@Component({
    selector:'crisis-list',
    template: `
    <h3 highlight>Crisis List</h3>
    <div *ngFor='let crisis of crisises | async'>
      <a routerLink="{{'../' + crisis.id}}">{{crisis.id}} - {{crisis.name}}</a>
    </div>
  `
})
export class CrisisListComponent implements OnInit {
    crisises:Promise<Crisis[]>;
    constructor(private crisisService:CrisisService){}
    ngOnInit():void{
        this.crisises=this.crisisService.getCrises();
    }

}