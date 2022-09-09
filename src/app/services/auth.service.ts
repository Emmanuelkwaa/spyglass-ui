import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResult } from '../models/AuthResult';
import { environment } from 'src/environments/environment';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register = "/auth/register";
  login = "/auth/login";

  constructor(private http: HttpClient) { }

  authenticate(userCred: any): Observable<AuthResult> {
    return this.http.post<AuthResult>(`${environment.baseUrl}${this.login}`, userCred)
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token') ||'';
  }
}
