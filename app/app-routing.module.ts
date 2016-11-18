/**
 * Created by zhengmz on 2016/11/15.
 */
import {RouterModule, Routes} from "@angular/router";
import {DashBoardComponent} from "./dashboard.component";
import {HerosComponent} from "./heros.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {NgModule} from "@angular/core";

const routes:Routes=[
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashBoardComponent},
    {path:'heroes',component:HerosComponent},
    {path:'detail/:id',component:HeroDetailComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}