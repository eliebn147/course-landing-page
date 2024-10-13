import { Component } from '@angular/core';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {IntroductionComponent} from '../../components/introduction/introduction.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    IntroductionComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
