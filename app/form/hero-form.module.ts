/**
 * Created by zhengmz on 2016/11/4.
 */
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HeroFormComponent } from './hero-form.component';
import {CommonModule} from "@angular/common";
@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HeroFormComponent
    ],
    exports:[HeroFormComponent]
})
export class HeroFormModule {

}