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
    if (this.username === 'test' && this.password === 'test') {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }

}
