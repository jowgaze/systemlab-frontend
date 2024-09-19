import { PublicService } from './../../core/services/public/public.service';
import { Component, OnInit } from '@angular/core';

import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderLoggedoutComponent } from '../../shared/header/header-loggedout/header-loggedout.component';
import { CardSessionComponent } from './../../shared/card-session/card-session.component';
import { SessionResponse } from '../../core/types/session';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderLoggedoutComponent, CardSessionComponent, FooterComponent, NgFor, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  sessions = new Observable<SessionResponse[]>();

  constructor(private publicService: PublicService) { }

  ngOnInit(): void {
    this.listSessions();
  }

  listSessions(){
    this.sessions = this.publicService.listSessions();
  }

}
