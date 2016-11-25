/**
 * Created by zhengmz on 2016/11/23.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AwesomePipe} from "./awesome.pipe";
import {HightLightDirective} from "./hightlight.directive";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports:[CommonModule],
    declarations:[AwesomePipe,HightLightDirective],
    exports:[AwesomePipe,HightLightDirective,CommonModule,FormsModule]
})

export class SharedModule{

}