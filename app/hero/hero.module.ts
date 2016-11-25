/**
 * Created by zhengmz on 2016/11/24.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {DashBoardComponent} from "./dashboard.component";
import {HerosComponent} from "./heros.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroSearchService} from "./hero-search.service";
import {HeroService} from "./hero.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
@NgModule({
    imports:[
        CommonModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        FormsModule,
        RouterModule
    ],
    declarations:[
        DashBoardComponent,
        HerosComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    exports:[
        DashBoardComponent,
        HerosComponent,
        HeroDetailComponent,
        HeroSearchComponent,
    ],
    providers:[
        HeroSearchService,
        HeroService
    ]
})
export class HeroModule{

}
