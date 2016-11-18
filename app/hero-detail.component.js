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
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, rout, location) {
        this.heroService = heroService;
        this.rout = rout;
        this.location = location;
    }
    ;
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rout.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetailComponent.prototype.goback = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.upDate(this.hero).then(function () { return _this.goback(); });
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-hero-detail',
            templateUrl: 'hero-datail.component.html',
            styleUrls: ['hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map