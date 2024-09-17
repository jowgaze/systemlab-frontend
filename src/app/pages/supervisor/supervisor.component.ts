import { Component } from '@angular/core';
import { HeaderLoggedinComponent } from "../../shared/header/header-loggedin/header-loggedin.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CardSessionComponent } from "../../shared/card-session/card-session.component";

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [HeaderLoggedinComponent, FooterComponent, CardSessionComponent],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.scss'
})
export class SupervisorComponent {

}
