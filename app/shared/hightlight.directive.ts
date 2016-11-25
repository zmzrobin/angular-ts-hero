/**
 * Created by zhengmz on 2016/11/22.
 */
import {Directive, ElementRef, Renderer, Input, HostListener} from '@angular/core';
@Directive({ selector: '[myhighlight], input' })
/** Highlight the attached element or an InputElement in blue */
export class HightLightDirective {

    private _defaultColor = 'red';

    constructor(private el: ElementRef, private renderer: Renderer) { }

    @Input() set defaultColor(colorName: string){
        this._defaultColor = colorName || this._defaultColor;
    }

    @Input() myhighlight: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.myhighlight || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
