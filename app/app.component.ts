/**
 * Created by zhengmz on 2016/11/15.
 */
import {Component} from "@angular/core";

@Component({
    moduleId:module.id,
    selector:'my-app',
    template: `
    <app-title [subtitle]="subtitle"></app-title>
    <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
     <a routerLink="/heroeform" routerLinkActive="active">Hero Form</a>
     <a routerLink="/contact" routerLinkActive="active">Contact</a>
     <a routerLink="/crisis" routerLinkActive="active">Crisis Center</a>
   </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls:['app.component.css']
})
export class AppComponent{
    subtitle= '(v1)';

}