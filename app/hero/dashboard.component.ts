/**
 * Created by zhengmz on 2016/11/15.
 */
import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
@Component({
    moduleId: module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.css']
})
export class DashBoardComponent implements OnInit{
    heroes:Hero[]=[];
    constructor(private heroService:HeroService){};
    getheroes():void{
        this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
    }

    ngOnInit():void{
        this.getheroes();
    }

}