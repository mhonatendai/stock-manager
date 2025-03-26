import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  loginError = false;

  constructor(private router: Router) {}

  login() {
    // Replace with your actual authentication logic
    if (this.username === 'test' && this.password === 'test') {
      // Successful login
      this.router.navigate(['/dashboard']);
    } else {
      // Failed login
      this.loginError = true;
    }
  }

}
