import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class MainService {
  isLoading: boolean = false;

  localStorage: any;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    this.localStorage = document.defaultView?.localStorage;
  }

  setLoading(loadingState: boolean) {
    this.isLoading = loadingState;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to set the token in localStorage
  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  // Function to get the token from localStorage
  getItem(key: string): string | null {
    return this.localStorage.getItem(key);
  }

  // Optional: Function to remove the token from localStorage
  clearStorage(): void {
    this.localStorage.removeItem('authToken');
    this.localStorage.removeItem('id');
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
