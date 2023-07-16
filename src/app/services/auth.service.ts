import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticationState = new BehaviorSubject(
    localStorage.getItem('login') ? true : false
  );

  constructor() {}
  authenticate() {
    this.authenticationState.next(true);
    localStorage.setItem('login', 'true');
  }
  logout() {
    this.authenticationState.next(false);
    localStorage.removeItem('login');
  }
  isAuthenticate() {
    return this.authenticationState;
  }
  isAuthenticateValue() {
    return this.authenticationState.value;
  }
}
