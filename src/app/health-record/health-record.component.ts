import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-record',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './health-record.component.html',
  styleUrl: './health-record.component.css'
})
export class HealthRecordComponent {

    healthForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.healthForm = this.fb.group({
      weight: ['', Validators.required],
      bp: ['', Validators.required],
      sugar: ['', Validators.required],
      heartRate: ['', Validators.required],
      oxygen: ['', Validators.required],
      temperature: ['', Validators.required],
      notes: ['']
    });
  }

   onSubmit(): void {
    if (this.healthForm.invalid) {
      this.healthForm.markAllAsTouched();
      return;
    }

    console.log(this.healthForm.value);

  
  }

  goBack() {
    this.router.navigate(['/patient/dashboard']);
  }
}
