import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-board-cards.component.html',
  styleUrl: './dash-board-cards.component.css'
})
export class DashBoardCardsComponent {

   cards = [
    {
      title: 'Find Doctors',
      description: 'Search and book appointments',
      icon: '🔍',
      bgColor: '#eef4ff'
    },
    {
      title: 'Book Appointment',
      description: 'Schedule your appointment',
      icon: '📅',
      bgColor: '#eefcf3'
    },
    {
      title: 'My Appointments',
      description: 'View your upcoming appointments',
      icon: '📋',
      bgColor: '#f7efff'
    },
    {
      title: 'Prescriptions',
      description: 'View and download prescriptions',
      icon: '📄',
      bgColor: '#fff6ec'
    }
  ];
}
