import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'fitstride_is_logged_in';
  private readonly platformId = inject(PLATFORM_ID);

  isLoggedIn = signal<boolean>(this.getInitialLoginState());

  login(username: string, password: string): boolean {
    const isValidUser = username === 'user1' && password === '123456';

    if (isValidUser) {
      if (this.isBrowser()) {
        localStorage.setItem(this.storageKey, 'true');
      }

      this.isLoggedIn.set(true);
      return true;
    }

    return false;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.storageKey);
    }

    this.isLoggedIn.set(false);
  }

  private getInitialLoginState(): boolean {
    if (!this.isBrowser()) {
      return false;
    }

    return localStorage.getItem(this.storageKey) === 'true';
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}