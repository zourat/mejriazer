import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MatButtonModule, MatSlideToggleModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'azerMejri';
}
