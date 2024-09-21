import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { SupervisorResponse } from '../../types/supervisor';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  private apiUrl: string = environment.api + '/supervisor';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getSupervisor(token: string): Observable<SupervisorResponse>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
  })
    return this.http.get<SupervisorResponse>(`${this.apiUrl}/getByToken`, { headers });
  }
}
