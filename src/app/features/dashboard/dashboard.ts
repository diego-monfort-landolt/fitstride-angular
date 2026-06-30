import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

type Route = {
  name: string;
  distance: string;
  level: string;
  time: string;
  image: string;
};

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  interests = ['Ausdauer', 'Speed', 'Recovery', 'Kraft', 'Trail Running'];
  selectedInterest = 'Ausdauer';

  routes: Route[] = [
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

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  selectInterest(interest: string): void {
    this.selectedInterest = interest;
  }

  getRecommendation(): string {
    if (this.selectedInterest === 'Speed') {
      return 'Heute passt ein kurzer Intervalllauf mit 6 × 400 m.';
    }

    if (this.selectedInterest === 'Recovery') {
      return 'Heute ist ein lockerer Recovery Run mit Mobility ideal.';
    }

    if (this.selectedInterest === 'Kraft') {
      return 'Fokus auf Core, Beine und Stabilität für bessere Lauftechnik.';
    }

    if (this.selectedInterest === 'Trail Running') {
      return 'Wähle eine hügelige Route und halte die Pace kontrolliert.';
    }

    return 'Ein 5 km Easy Run ist heute die beste Wahl für deine Ausdauer.';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}