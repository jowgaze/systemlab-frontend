import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionResponse } from '../../types/session';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private apiUrl = environment.api + '/public';

  constructor(private httpClient: HttpClient) { }

  public listSessions(): Observable<SessionResponse[]>{
    return this.httpClient.get<SessionResponse[]>(`${this.apiUrl}/sessions`);
  }
}
