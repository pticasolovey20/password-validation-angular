import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password: string = '';
  colors: string[] = ['#8f8f8f', '#8f8f8f', '#8f8f8f'];

  setPassword(pass: string) {
    this.password = pass;
    this.colors = this.checkPasswordStrenght(this.password);
  }

  empty = ['#8f8f8f', '#8f8f8f', '#8f8f8f'];
  short = ['#ff4757', '#ff4757', '#ff4757'];
  easy = ['#ff4757', '#8f8f8f', '#8f8f8f'];
  medium = ['#f9f34f', '#f9f34f', '#8f8f8f'];
  strong = ['#23ad5c', '#23ad5c', '#23ad5c'];

  checkPasswordStrenght = (password: string): string[] => {
    const validRegExp = [
      /[a-zA-Z]|\d|[!,@,#,$,%,^,&,*,(,)]/,
      /(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[!,@,#,$,%,^,&,*,(,)])|(?=.*\d)(?=.*[!,@,#,$,%,^,&,*,(,)])/,
      /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!,@,#,$,%,^,&,*,(,)])/,
    ];

    const empty = ['#8f8f8f', '#8f8f8f', '#8f8f8f'];
    const short = ['#ff4757', '#ff4757', '#ff4757'];
    const easy = ['#ff4757', '#8f8f8f', '#8f8f8f'];
    const medium = ['#f9f34f', '#f9f34f', '#8f8f8f'];
    const strong = ['#23ad5c', '#23ad5c', '#23ad5c'];

    let counter = 0;

    validRegExp.forEach((regExp) => {
      if (new RegExp(regExp).test(password)) {
        counter += 1;
      }
    });

    if (password.length < 8) {
      return short;
    } else {
      switch (counter) {
        case 1:
          return easy;

        case 2:
          return medium;

        case 3:
          return strong;

        default:
          return empty;
      }
    }
  };
}
