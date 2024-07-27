import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContainerComponent} from "../core/layout/container/container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shop';
}
