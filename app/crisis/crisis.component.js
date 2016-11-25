"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by zhengmz on 2016/11/23.
 */
var core_1 = require("@angular/core");
var CrisisComponent = (function () {
    function CrisisComponent() {
        this.heroes = [];
    }
    CrisisComponent = __decorate([
        core_1.Component({
            selector: 'app-crisis',
            template: "\n    <h3 highlight>Hero List</h3>\n    <div *ngFor='let hero of heroes | async'>\n      <a routerLink=\"{{hero.id}}\">{{hero.id}} - {{hero.name}}</a>\n    </div>\n  "
        })
    ], CrisisComponent);
    return CrisisComponent;
}());
exports.CrisisComponent = CrisisComponent;
