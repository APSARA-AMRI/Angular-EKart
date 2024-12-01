import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,headerComponent,TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EKart';
}
