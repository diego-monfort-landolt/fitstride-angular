import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  skills = [
    'Angular',
    'TypeScript',
    'SCSS',
    'Responsive Design',
    'Clean Architecture',
    'Testing',
    'UX/UI',
    'SEO'
  ];
}