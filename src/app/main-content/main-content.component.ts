import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { ImprintComponent } from '../imprint/imprint.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  imports: [NavbarComponent, LandingPageComponent, HowToOrderComponent, OurMenuComponent, ImprintComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
