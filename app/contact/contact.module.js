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
var core_1 = require("@angular/core");
var contact_component_1 = require("./contact.component");
var contact_service_1 = require("./contact.service");
var contact_routing_moule_1 = require("./contact-routing.moule");
var shared_module_1 = require("../shared/shared.module");
/**
 * Created by zhengmz on 2016/11/23.
 */
var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, contact_routing_moule_1.ContactRoutingModule],
            declarations: [
                contact_component_1.ContactComponent
            ],
            providers: [
                contact_service_1.ContactService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactModule);
    return ContactModule;
}());
exports.ContactModule = ContactModule;
//# sourceMappingURL=contact.module.js.map