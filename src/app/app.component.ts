import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'course-landing-page';

  constructor(public mainService: MainService) {}
}
