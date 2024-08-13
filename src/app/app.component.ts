import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WordArray from 'crypto-js/lib-typedarrays';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'foo';

  constructor() {
    const someVar = WordArray.random(40);
    this.title = 'i got this ' + someVar;
    console.log('what is someVar', someVar);
  }
}
