import { CardSessionComponent } from './../../shared/card-session/card-session.component';
import { Component } from '@angular/core';
import { HeaderLoggedoutComponent } from '../../shared/header/header-loggedout/header-loggedout.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderLoggedoutComponent, CardSessionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
