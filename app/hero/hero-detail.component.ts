/**
 * Created by zhengmz on 2016/11/14.
 */
import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';
import {Hero} from "./hero";
@Component ({
    moduleId: module.id,
    selector:'my-hero-detail',
    templateUrl:'hero-datail.component.html',
    styleUrls:['hero-detail.component.css']

})
export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService:HeroService,
        private rout:ActivatedRoute,
        private location:Location
    ){};
    hero:Hero;

    ngOnInit():void{
        this.rout.params.forEach((params:Params)=>{
            let id=+params['id'];
            this.heroService.getHero(id).then(hero=>this.hero=hero)
        })
    }
    goback():void{
        this.location.back();
    }
    save():void{
        this.heroService.upDate(this.hero).then(()=>this.goback())
    }

}