/**
 * Created by zhengmz on 2016/11/4.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroComponent }  from './hero.component';
import { HeroFormComponent } from './hero-form.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        HeroComponent,
        HeroFormComponent
    ],
    bootstrap: [ HeroComponent ]
})
export class HeroFormModule {

}