/**
 * Created by zhengmz on 2016/11/14.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroFormModule } from './form/hero-form.module';
import { FormsModule }   from '@angular/forms';

import { HerosComponent} from './heros.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {DashBoardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";


@NgModule({
    imports:[BrowserModule,FormsModule,HeroFormModule,AppRoutingModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService)],
    declarations:[AppComponent,HeroDetailComponent,HerosComponent,DashBoardComponent],
    providers:[HeroService],
    bootstrap:[AppComponent],

})
export class AppModule{

}