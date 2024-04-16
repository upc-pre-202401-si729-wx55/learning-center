import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ACME Learning Center';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/about', title: 'About'}
  ]
}
