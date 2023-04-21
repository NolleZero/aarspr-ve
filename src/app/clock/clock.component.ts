import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  template: '<div>{{ time }}</div>'
})
export class ClockComponent {
  time: string="";

  constructor() {
    this.setTime();
    interval(1000).subscribe(() => {
      this.setTime();
    });
  }

  setTime() {
    const date = new Date();
    const options = { timeZone: 'Europe/Moscow' };
    this.time = date.toLocaleTimeString([], options);
  }
}
