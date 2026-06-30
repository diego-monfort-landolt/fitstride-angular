import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'fitstride_is_logged_in';

  isLoggedIn = signal<boolean>(this.getInitialLoginState());

  login(username: string, password: string): boolean {
    const isValidUser = username === 'user1' && password === '123456';

    if (isValidUser) {
      localStorage.setItem(this.storageKey, 'true');
      this.isLoggedIn.set(true);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.isLoggedIn.set(false);
  }

  private getInitialLoginState(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }
}