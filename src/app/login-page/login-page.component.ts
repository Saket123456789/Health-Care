import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule ,NzInputModule,NzIconModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

    loginForm: FormGroup;
  passwordVisible = false;

  constructor(private fb: FormBuilder,private router: Router,private apiService :ApiService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSigupPage(){
    this.router.navigate(['/signUp']);
  }

  onLogin(){
     this.apiService.onLogin(this.loginForm.value).subscribe(
    response => this.router.navigate(['/patient/dashboard']),
    error => console.error('Login failed', error)
  );
  }
}
