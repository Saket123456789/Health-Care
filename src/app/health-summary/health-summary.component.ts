import { Component } from '@angular/core';

@Component({
  selector: 'app-health-summary',
  standalone: true,
  imports: [],
  templateUrl: './health-summary.component.html',
  styleUrl: './health-summary.component.css'
})
export class HealthSummaryComponent {

   healthStats = [
    {
      title: 'Heart Rate',
      value: '72 bpm',
      icon: '❤️'
    },
    {
      title: 'Blood Pressure',
      value: '120/80',
      icon: '🩸'
    },
    {
      title: 'BMI',
      value: '22.5',
      icon: '⚖️'
    }
  ];
}
