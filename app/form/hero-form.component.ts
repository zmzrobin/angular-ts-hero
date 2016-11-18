/**
 * Created by zhengmz on 2016/11/7.
 */
import { Component } from '@angular/core';
import { Hero }    from './hero';
@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html',
    styleUrls:['forms.css']
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    active = true;

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    submitted = false;
    onSubmit(heroForm) { this.submitted = true;
    console.log(heroForm)}
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}