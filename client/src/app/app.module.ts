import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeListComponent } from './time-list/time-list.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimeListComponent,
    TimeEntryComponent,
    HeaderComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
