import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { DashBoardCardsComponent } from '../dash-board-cards/dash-board-cards.component';
import { UpcomingAppointmentComponent } from '../upcoming-appointment/upcoming-appointment.component';
import { HealthSummaryComponent } from '../health-summary/health-summary.component';
import { TopRatedDoctorComponent } from '../top-rated-doctor/top-rated-doctor.component';
import { HealthReminderComponent } from '../health-reminder/health-reminder.component';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,DashBoardCardsComponent,UpcomingAppointmentComponent,HealthSummaryComponent,TopRatedDoctorComponent,HealthReminderComponent],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {

}
