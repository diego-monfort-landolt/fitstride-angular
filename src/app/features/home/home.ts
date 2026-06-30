import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  stats = [
    { value: '12+', label: 'Running Routen' },
    { value: '4', label: 'Trainingsziele' },
    { value: 'AI', label: 'Empfehlungen' }
  ];

  recommendations = [
    {
      title: 'Intervalllauf',
      text: 'Perfekt, wenn du Geschwindigkeit und Ausdauer kombinieren möchtest.'
    },
    {
      title: 'Recovery Run',
      text: 'Leichter Lauf zur Regeneration nach intensiven Trainingstagen.'
    },
    {
      title: 'Core Training',
      text: 'Stärkt Rumpf, Stabilität und Lauftechnik.'
    }
  ];
}