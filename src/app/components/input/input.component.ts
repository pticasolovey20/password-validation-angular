import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() outEnterPassword = new EventEmitter<string>();

  showPassword = false;

  enterPassword(passwordInput: HTMLInputElement) {
    this.outEnterPassword.emit(passwordInput.value);
  }
}
