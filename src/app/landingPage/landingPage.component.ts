import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [NavbarComponent],
    template: /*html*/`
    <section>
        <app-navbar></app-navbar>
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ['./landingPage.components.scss']
})
export class LandingPageComponent { }