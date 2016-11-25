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
 * Created by zhengmz on 2016/11/14.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var hero_form_module_1 = require('./form/hero-form.module');
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
require('./core/rxjs-extensions');
var core_module_1 = require("./core/core.module");
var hero_module_1 = require("./hero/hero.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                hero_form_module_1.HeroFormModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule.forRoot({ userName: 'Miss Marple' }),
                hero_module_1.HeroModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map