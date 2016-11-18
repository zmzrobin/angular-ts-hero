"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zhengmz on 2016/11/4.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var hero_component_1 = require('./hero.component');
var hero_form_component_1 = require('./hero-form.component');
var HeroFormModule = (function () {
    function HeroFormModule() {
    }
    HeroFormModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                hero_component_1.HeroComponent,
                hero_form_component_1.HeroFormComponent
            ],
            bootstrap: [hero_component_1.HeroComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormModule);
    return HeroFormModule;
}());
exports.HeroFormModule = HeroFormModule;
//# sourceMappingURL=hero-form.module.js.map