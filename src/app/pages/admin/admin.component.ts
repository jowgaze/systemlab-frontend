import { Component } from '@angular/core';

import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderLoggedinComponent } from '../../shared/header/header-loggedin/header-loggedin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderLoggedinComponent, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
