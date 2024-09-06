import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-register.component.html',
  styleUrl: './modal-register.component.scss'
})
export class ModalRegisterComponent {

  private formBuilder = inject(FormBuilder);
  protected requestRegister = this.formBuilder.group({
    name: [null, Validators.required],
    username: [null, Validators.required],
    password: [null, Validators.required],
    registration: [null, Validators.required],
    course: [null, Validators.required],
    entryPeriod: [null, Validators.required]
  });

}
