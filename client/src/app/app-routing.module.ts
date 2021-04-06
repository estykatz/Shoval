import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { RegistratioComponent } from './components/registratio/registratio.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { HomeComponent } from './components/home/home.component';
import { EmailComponent } from './components/email/email.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'registratio', component: RegistratioComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'enter', component: UsersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allStudents', component: AllStudentsComponent },
  { path: 'email', component: EmailComponent },
  //{ path:'',redirectTo:'/home',pathMatch:'full'}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




