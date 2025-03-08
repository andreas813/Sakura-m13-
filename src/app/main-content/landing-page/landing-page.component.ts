import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [NavbarComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.components.scss',
})
export class LandingPageComponent { }