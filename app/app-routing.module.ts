/**
 * Created by zhengmz on 2016/11/15.
 */
import {RouterModule, Routes} from "@angular/router";
import {DashBoardComponent} from "./hero/dashboard.component";
import {HerosComponent} from "./hero/heros.component";
import {HeroDetailComponent} from "./hero/hero-detail.component";
import {NgModule} from "@angular/core";
import {HeroFormComponent} from "./form/hero-form.component";

const routes:Routes=[
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashBoardComponent},
    {path:'heroes',component:HerosComponent},
    {path:'heroeform',component:HeroFormComponent},
    {path:'detail/:id',component:HeroDetailComponent},
    {path:'contact', loadChildren:'app/contact/contact.module#ContactModule'},
    {path:'crisis', loadChildren:'app/crisis/crisis.module#CrisisModule'}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}