import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { PasswordStrenghtMetterComponent } from 'src/app/components/password-strenght-metter/password-strenght-metter.component';

@NgModule({
  declarations: [AppComponent, InputComponent, PasswordStrenghtMetterComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
