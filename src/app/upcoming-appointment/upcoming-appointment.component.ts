import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-appointment.component.html',
  styleUrl: './upcoming-appointment.component.css'
})
export class UpcomingAppointmentComponent {

   appointments = [
    {
      doctorName: 'Dr. Anjali Verma',
      specialization: 'Cardiologist',
      date: '16 May, 2026',
      time: '10:30 AM',
      hospital: 'CityCare Hospital, Delhi',
      status: 'Confirmed',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      doctorName: 'Dr. Rajat Mehta',
      specialization: 'Dermatologist',
      date: '20 May, 2026',
      time: '02:00 PM',
      hospital: 'Skin Plus Clinic, Delhi',
      status: 'Pending',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  ];
}
