import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
