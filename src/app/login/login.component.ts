import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./service/login.service";
import {LoginDTO} from "../models/login.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginData: LoginDTO = { username: '', password: '' };
  errorMessage = '';
  loginError = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        if (error.error?.apiMessage) {
          this.errorMessage = error.error.apiMessage;
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
    });
  }

}
