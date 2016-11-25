/**
 * Created by zhengmz on 2016/11/14.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroFormModule } from './form/hero-form.module';

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import './core/rxjs-extensions';
import {CoreModule} from "./core/core.module";
import {HeroModule} from "./hero/hero.module";


@NgModule({
    imports:[
        BrowserModule,
        HeroFormModule,
        AppRoutingModule,
        CoreModule.forRoot({userName: 'Miss Marple'}),
        HeroModule
    ],
    declarations:[
        AppComponent

    ],
    providers:[],
    bootstrap:[
        AppComponent
    ],

})
export class AppModule{

}