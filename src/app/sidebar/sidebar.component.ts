import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 menuItems = [
    {
      title: 'Dashboard',
      route: '/patient/dashboard',
      icon: '🏠'
    },
    {
      title: 'Find Doctors',
      route: '/patient/doctors',
      icon: '👨‍⚕️'
    },
    {
      title: 'Appointments',
      route: '/patient/appointments',
      icon: '📅'
    },
    {
      title: 'Prescriptions',
      route: '/patient/prescriptions',
      icon: '💊'
    },
    {
      title: 'Health Records',
      route: '/patient/records',
      icon: '📋'
    },
    {
      title: 'Payments',
      route: '/patient/payments',
      icon: '💳'
    },
    {
      title: 'Messages',
      route: '/patient/messages',
      icon: '💬'
    },
    {
      title: 'Profile',
      route: '/patient/profile',
      icon: '👤'
    },
    {
      title: 'Settings',
      route: '/patient/settings',
      icon: '⚙️'
    }
  ];
}


  