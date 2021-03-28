import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRegisterComponentComponent } from './user-register-component/user-register-component.component';
import { FormComponent } from './form/form.component';
import {Form1Component} from './form1/form1.component'

const routes: Routes = [
  {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"userRegisterComponent",component:UserRegisterComponentComponent},
  {path:"FormComponent",component:FormComponent},
  {path:"Form1Component",component:Form1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }