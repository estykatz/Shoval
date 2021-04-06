import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './components/payment/payment.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceComponent } from './components/attendance/attendance.component';
// import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { RegistratioComponent } from './components/registratio/registratio.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';

import { PersonalcardComponent } from './components/personalcard/personalcard.component';

import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { HomeComponent } from './components/home/home.component';
import { EmailComponent } from './components/email/email.component';
//// 5ea2ff208d8f3e0e5ff46ca51286c3068303a73a

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    AttendanceComponent,
    // EnrollmentComponent,
    RegistratioComponent,
    NewUserComponent,
    CoursesComponent,
    UsersComponent,
//// HEAD
    PersonalcardComponent
////
  ///  PersonalCardComponent,
   // AllStudentsComponent,
  //  HomeComponent,
  //  EmailComponent
///>>>>>>> 5ea2ff208d8f3e0e5ff46ca51286c3068303a73a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
 // providers: [DataService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
