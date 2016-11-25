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
 * Created by zhengmz on 2016/11/23.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var crisis_service_1 = require("./crisis.service");
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(crisisService, route) {
        this.crisisService = crisisService;
        this.route = route;
    }
    ;
    CrisisDetailComponent.prototype.ngOnInit = function () {
        // this.id=this.route.params['id']
        this.id = parseInt(this.route.snapshot.params['id'], 10);
    };
    CrisisDetailComponent = __decorate([
        core_1.Component({
            selector: 'crisis-detail',
            template: "\n    <h3 highlight>Crisis Detail</h3>\n    <div>Crisis id: {{id}}</div>\n    <br>\n    <a routerLink=\"../list\">Crisis List</a>\n  "
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService, router_1.ActivatedRoute])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map