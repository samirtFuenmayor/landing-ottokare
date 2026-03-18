import { Component } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { IncludesComponent } from './components/includes/includes.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { JoinComponent } from './components/join/join.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    BenefitsComponent,
    IncludesComponent,
    PricingComponent,
    HowItWorksComponent,
    JoinComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html'
})
export class LandingComponent {}