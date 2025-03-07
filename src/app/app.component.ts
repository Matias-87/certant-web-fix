import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientsSectionComponent } from "./clients-section/clients-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ClientsSectionComponent]
})
export class AppComponent {
  title = 'certant-web-fix';
}
