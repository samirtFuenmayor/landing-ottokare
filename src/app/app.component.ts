import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LandingComponent } from './features/landing/landing.componten';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingComponent],
  template: `<app-landing></app-landing>`,
})
export class AppComponent {
}
