import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poc-angular';
  user() {
    let a: any[] = [1, 2, 3, 4];
    a = a.map((aa) => aa * 4);
    return a;
  }
}
