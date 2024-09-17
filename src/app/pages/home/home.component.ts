import { Component } from '@angular/core';

import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderLoggedoutComponent } from '../../shared/header/header-loggedout/header-loggedout.component';
import { CardSessionComponent } from './../../shared/card-session/card-session.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderLoggedoutComponent, CardSessionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
