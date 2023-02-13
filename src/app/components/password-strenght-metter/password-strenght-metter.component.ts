import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strenght-metter',
  templateUrl: './password-strenght-metter.component.html',
  styleUrls: ['./password-strenght-metter.component.scss'],
})
export class PasswordStrenghtMetterComponent {
  @Input() colors: string[];
}
