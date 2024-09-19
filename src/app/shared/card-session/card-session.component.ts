import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ModalSessionInfoComponent } from '../modal-session-info/modal-session-info.component';
import { SessionResponse } from '../../core/types/session';

@Component({
  selector: 'app-card-session',
  standalone: true,
  imports: [ModalSessionInfoComponent, NgClass],
  templateUrl: './card-session.component.html',
  styleUrl: './card-session.component.scss'
})
export class CardSessionComponent implements OnInit{
  @Input() session!: SessionResponse;
  colorStatus: 'bg-red-600' | 'bg-green-600' = 'bg-red-600';

  ngOnInit(): void {
    initFlowbite();

    if(this.session.status)
        this.colorStatus = 'bg-green-600';
    else
      this.colorStatus = 'bg-red-600';
  }
}
