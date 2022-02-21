import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncmentsComponent } from './announcments/announcments.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {GradesComponent} from './grades/grades.component';
import {PaymentsComponent} from './payments/payments.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {
    path: 'announcments',
    component: AnnouncmentsComponent
  },
  {
    path: 'studentinfo',
    component: StudentInfoComponent
  },
  {
    path: 'grades',
    component: GradesComponent
  },
  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
