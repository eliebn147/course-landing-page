import {Component, HostListener, Inject, OnInit, output, PLATFORM_ID} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {isPlatformBrowser, JsonPipe} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DialogModule} from "primeng/dialog";
import {ButtonComponent} from "../shared/button/button.component";
import {DialogComponent} from "../shared/dialog/dialog.component";
import {InputComponent} from "../shared/input/input.component";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {MainService} from "../../services/main.service";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    DialogModule,
    ButtonComponent,
    DialogComponent,
    InputComponent,
    PasswordModule,
    FormsModule,
    JsonPipe,
    ToastModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  signInDialog = output();

  selectedSection: string = 'introduction';

  sections = [
    'introduction',
    'aboutus',
    'course',
    'meetus',
    'feedback',
    'contactus',
    'subscribe',
  ];
  menuOpen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public mainService: MainService) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Only run this code in the browser
      this.updateActiveSection();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      // Only run this code in the browser
      this.updateActiveSection();
    }
  }

  selectSection(sectionId: string) {
    this.selectedSection = sectionId;
    this.scrollToSection(sectionId);
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = -61.6; // Adjust this value to your fixed header's height
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }

  updateActiveSection() {
    if (isPlatformBrowser(this.platformId)) {
      for (let sectionId of this.sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 62 && rect.bottom >= 62) {
            // 62 accounts for the navbar height to determine which section is in view
            this.selectedSection = sectionId;
            break;
          }
        }
      }
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
