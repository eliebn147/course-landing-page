import { Component } from '@angular/core';
import {ButtonComponent} from '../shared/button/button.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

}
