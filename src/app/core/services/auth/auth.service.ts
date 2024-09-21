import { UserService } from './../user/user.service';
import { HttpClient, HttpParams, HttpResponse, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl: string = environment.api;

  constructor(private http: HttpClient, private userService: UserService) { }

  public authLogin(username: string, password: string): Observable<HttpResponse<AuthResponse>> {
    const PARAMS = new HttpParams()
      .set('username', `${username}`)
      .set('password', `${password}`);

    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, PARAMS, {observe: 'response'}).pipe(
      tap(response => {
        const token = response.body?.token || '';
        console.log(token);
        this.userService.saveToken(token);
      })
    );

  }

  public logout(){
    this.userService.logout();
  }
}
