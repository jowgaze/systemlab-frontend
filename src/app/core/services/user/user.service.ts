import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { UserRequest } from '../../types/user';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<UserRequest | null>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.statusToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as UserRequest;
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getToken(){
    this.tokenService.getToken();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }

  statusLogin() {
    return this.tokenService.statusToken();
  }
}
