import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  name = '';
  email = '';
  password = '';
  acceptedTerms = false;
  successMessage = '';

  onSubmit(): void {
    this.successMessage = 'Registrierung erfolgreich simuliert. Du kannst dich jetzt einloggen.';
    this.name = '';
    this.email = '';
    this.password = '';
    this.acceptedTerms = false;
  }
}