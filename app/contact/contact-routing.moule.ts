/**
 * Created by zhengmz on 2016/11/23.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact.component";

const contactRoutes:Routes=[
    {path:'',component:ContactComponent}
]
@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes)
    ],
})
export class ContactRoutingModule{

}
