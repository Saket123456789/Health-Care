import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
 imports: [ CommonModule,
     ReactiveFormsModule ,NzInputModule,NzIconModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

   signupForm: FormGroup;

  showPassword = false;

  showConfirmPassword = false;

  selectedRole = 'patient';

  constructor(
    private fb: FormBuilder,private router: Router,private apiService :ApiService
  ) {

    this.signupForm = this.fb.group({

      role: ['patient'],

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],

      confirmPassword: [
        '',
        Validators.required
      ],

      terms: [
        false,
      ]
    });
  }

  // ROLE SELECT

  selectRole(role: string): void {

    this.selectedRole = role;

    this.signupForm.patchValue({
      role: role
    });
  }

  // SUBMIT

  onSubmit(): void {

    if (this.signupForm.invalid) {

      this.signupForm.markAllAsTouched();

      return;
    }

    // PASSWORD MATCH CHECK

    if (
      this.signupForm.value.password !==
      this.signupForm.value.confirmPassword
    ) {

      alert('Passwords do not match');

      return;
    }

    console.log(this.signupForm.value);
   this.onSignup();
    alert('Signup Successful');
  }

  backToLoginPage(){
  this.router.navigate(['']);
  }

  onSignup() {
  this.apiService.signup(this.signupForm.value).subscribe(
    response => console.log('Login successful', response),
    error => console.error('Login failed', error)
  );
}
}
