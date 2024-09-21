import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-loggedin',
  standalone: true,
  imports: [],
  templateUrl: './header-loggedin.component.html',
  styleUrl: './header-loggedin.component.scss'
})
export class HeaderLoggedinComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
