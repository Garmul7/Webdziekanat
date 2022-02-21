import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnnouncmentsComponent } from './announcments/announcments.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { GradesComponent } from './grades/grades.component';
import { PaymentsComponent } from './payments/payments.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'announcments', component: AnnouncmentsComponent},
  {path: 'studentinfo', component: StudentInfoComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: 'announcments', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    AnnouncmentsComponent,
    StudentInfoComponent,
    GradesComponent,
    PaymentsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
