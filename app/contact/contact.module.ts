import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {ContactRoutingModule} from "./contact-routing.moule";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by zhengmz on 2016/11/23.
 */
@NgModule({
    imports:[SharedModule,ContactRoutingModule],
    declarations:[
        ContactComponent
    ],
    providers:[
        ContactService
    ]

})
export class ContactModule{

}