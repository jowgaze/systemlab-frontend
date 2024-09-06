import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.scss'
})
export class ModalLoginComponent {
  private formBuilder = inject(FormBuilder);
  protected loginForm = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
}
