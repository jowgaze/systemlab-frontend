import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveToken(token: string){
    return localStorage.setItem(KEY, token)
  }

  deleteToken(){
    localStorage.removeItem(KEY);
  }

  getToken(){
    return localStorage.getItem(KEY) ?? "";
  }

  statusToken(){
    return !!this.getToken();
  }
}
