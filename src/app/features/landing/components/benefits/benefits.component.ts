import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  templateUrl: './benefits.component.html'
})
export class BenefitsComponent {

  flippedCards: boolean[] = [false, false, false];

  flipCard(index:number){
    this.flippedCards[index] = true;
  }

  unflipCard(index:number){
    this.flippedCards[index] = false;
  }

}