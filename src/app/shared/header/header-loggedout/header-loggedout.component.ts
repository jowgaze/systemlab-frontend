import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ModalRegisterComponent } from '../../modal-register/modal-register.component';
import { ModalLoginComponent } from '../../modal-login/modal-login.component';

@Component({
  selector: 'app-header-loggedout',
  standalone: true,
  imports: [ModalRegisterComponent, ModalLoginComponent],
  templateUrl: './header-loggedout.component.html',
  styleUrl: './header-loggedout.component.scss'
})
export class HeaderLoggedoutComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
