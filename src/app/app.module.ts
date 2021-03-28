
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRegisterComponentComponent } from './user-register-component/user-register-component.component';
import{HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    UserRegisterComponentComponent,
    FormComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }