import { Injectable } from '@angular/core';

export type RunningRoute = {
  name: string;
  distance: string;
  level: string;
  time: string;
  image: string;
};

@Injectable({
  providedIn: 'root'
})
export class RunningDataService {
  private readonly routes: RunningRoute[] = [
    {
      name: 'City Tempo Loop',
      distance: '5.2 km',
      level: 'Mittel',
      time: '32 Min',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Morning Park Run',
      distance: '3.8 km',
      level: 'Einfach',
      time: '24 Min',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80'
    },
    {
      name: 'Hill Endurance Track',
      distance: '8.4 km',
      level: 'Fortgeschritten',
      time: '58 Min',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=80'
    }
  ];

  getRoutes(): RunningRoute[] {
    return this.routes;
  }

  getRecommendation(selectedInterest: string): string {
    if (selectedInterest === 'Speed') {
      return 'Heute passt ein kurzer Intervalllauf mit 6 × 400 m.';
    }

    if (selectedInterest === 'Recovery') {
      return 'Heute ist ein lockerer Recovery Run mit Mobility ideal.';
    }

    if (selectedInterest === 'Kraft') {
      return 'Fokus auf Core, Beine und Stabilität für bessere Lauftechnik.';
    }

    if (selectedInterest === 'Trail Running') {
      return 'Wähle eine hügelige Route und halte die Pace kontrolliert.';
    }

    return 'Ein 5 km Easy Run ist heute die beste Wahl für deine Ausdauer.';
  }
}