import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogin = false;
  constructor(private auth: AuthService) {
    this.auth.isAuthenticate().subscribe((value) => (this.isLogin = value));
  }
  logout() {
    this.auth.logout();
  }
}
