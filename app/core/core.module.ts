/**
 * Created by zhengmz on 2016/11/23.
 */
import {NgModule, Optional, SkipSelf, ModuleWithProviders} from "@angular/core";
import {UserService, UserServiceConfig} from "./user.service";
import {TitleComponent} from "./title.component";
import {CommonModule} from "@angular/common";
@NgModule({
    imports:[CommonModule],
    declarations:[TitleComponent],
    providers:[UserService],
    exports:[TitleComponent]
})
export class CoreModule{

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {provide: UserServiceConfig, useValue: config }
            ]
        };
    }

}