import { Component, Input, OnInit } from '@angular/core';
import { SessionResponse } from '../../core/types/session';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal-session-info',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal-session-info.component.html',
  styleUrl: './modal-session-info.component.scss'
})
export class ModalSessionInfoComponent implements OnInit{
  @Input() session !: SessionResponse;
  statusColor: 'bg-red-500' | 'bg-green-500' = 'bg-red-500';
  statusText: 'Inativa' | 'Ativa' = 'Inativa';

  ngOnInit(): void {
    if(this.session.status){
      this.statusColor = 'bg-green-500';
      this.statusText = 'Ativa';
    }else{
      this.statusColor = 'bg-red-500';
      this.statusText = 'Inativa';
    }
  }
}
