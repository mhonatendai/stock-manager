import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../models/login.dto';
import { ApiResponse } from '../../models/api-response.model';
import { UserDto } from '../../models/user.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth/login`;

  constructor(private http: HttpClient) {}

  login(loginData: LoginDTO): Observable<ApiResponse<UserDto>> {
    return this.http.post<ApiResponse<UserDto>>(this.apiUrl, loginData);
  }
}
