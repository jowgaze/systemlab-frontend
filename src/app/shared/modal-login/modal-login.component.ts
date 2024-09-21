import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from './../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.scss'
})
export class ModalLoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  protected loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public loginAuth() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authService.authLogin(username, password).subscribe({
      next: () => this.router.navigate(['/supervisor']),
      error: () => alert("Erro ao logar.")
    })
  }
}
