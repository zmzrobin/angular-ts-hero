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
 * Created by zhengmz on 2016/11/22.
 */
var core_1 = require('@angular/core');
var HightLightDirective = (function () {
    function HightLightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._defaultColor = 'red';
    }
    Object.defineProperty(HightLightDirective.prototype, "defaultColor", {
        set: function (colorName) {
            this._defaultColor = colorName || this._defaultColor;
        },
        enumerable: true,
        configurable: true
    });
    HightLightDirective.prototype.onMouseEnter = function () {
        this.highlight(this.myhighlight || this._defaultColor);
    };
    HightLightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HightLightDirective.prototype.highlight = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HightLightDirective.prototype, "defaultColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HightLightDirective.prototype, "myhighlight", void 0);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HightLightDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HightLightDirective.prototype, "onMouseLeave", null);
    HightLightDirective = __decorate([
        core_1.Directive({ selector: '[myhighlight], input' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], HightLightDirective);
    return HightLightDirective;
}());
exports.HightLightDirective = HightLightDirective;
//# sourceMappingURL=hightlight.directive.js.map