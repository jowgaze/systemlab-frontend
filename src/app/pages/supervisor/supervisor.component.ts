import { Component, OnInit } from '@angular/core';

import { PublicService } from '../../core/services/public/public.service';
import { TokenService } from '../../core/services/token/token.service';
import { CardSessionComponent } from '../../shared/card-session/card-session.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderLoggedinComponent } from '../../shared/header/header-loggedin/header-loggedin.component';
import { SupervisorService } from './../../core/services/supervisor/supervisor.service';
import { SupervisorResponse } from './../../core/types/supervisor';
import { SessionResponse } from '../../core/types/session';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [HeaderLoggedinComponent, FooterComponent, CardSessionComponent, NgClass, AsyncPipe, NgFor],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.scss'
})
export class SupervisorComponent implements OnInit {
  statusColor: 'bg-red-500' | 'bg-green-500' = 'bg-red-500';
  statusText: 'Inativa' | 'Ativa' = 'Inativa';
  supervisor!: SupervisorResponse;
  session!: SessionResponse;
  sessions = new Observable<SessionResponse[]>();

  constructor(
    private supervisorService: SupervisorService,
    private publicService: PublicService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.getSupervisor();
    this.listSessions();
  }

  private getSupervisor(): void {
    this.supervisorService.getSupervisor(this.tokenService.getToken()).subscribe(
      supervisor => {
        this.supervisor = supervisor;
        this.publicService.listSessionBySupervisor(supervisor.id).subscribe(
          session => {
            this.session = session

            if(session.status){
              this.statusColor = 'bg-green-500';
              this.statusText = 'Ativa';
            }else{
              this.statusColor = 'bg-red-500';
              this.statusText = 'Inativa';
            }
          }
        )
      }
    )
  }

  listSessions(){
    this.sessions = this.publicService.listSessions();
  }

}
