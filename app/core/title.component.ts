/**
 * Created by zhengmz on 2016/11/21.
 */
import {Component, Input} from "@angular/core";
import {UserService} from "./user.service";
@Component({
    selector:'app-title',
    template:`
    <h1 [style.background]="'lime'">{{title}} {{subtitle}}</h1>
    <p *ngIf="user">
        <i>Welcome, {{user}}</i>
    </p>
`
})
export class TitleComponent{
    title='Tour of Heroes';
    @Input() subtitle='';
    user:string='';
    constructor(userService:UserService){
        this.user=userService.userName;
    };


}