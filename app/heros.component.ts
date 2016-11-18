import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";


@Component ({
    moduleId:module.id,
    selector:'my-heroes',
    templateUrl:'hero.component.html',
    styleUrls: ['hero.component.css']
})
export class HerosComponent implements OnInit{
    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    heroes: Hero[];
    constructor(
        private heroService:HeroService,
        private router:Router) {};

    getHeroes():void{
        this.heroService.getHeroes().then(heroes=>this.heroes=heroes)
    }

    ngOnInit(): void {
        this.getHeroes();
    }
    gotoDetail():void{
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    addHero(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
    deleteHero(hero:Hero):void{
        //todo
        this.heroService.delet(hero.id)
            .then(()=>{
                this.heroes = this.heroes.filter(h => h !== hero);
                if(this.selectedHero==hero){this.selectedHero=null;}
            })
    }
}