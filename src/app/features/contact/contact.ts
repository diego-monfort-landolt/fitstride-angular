import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  message = '';
  successMessage = '';

  onSubmit(contactForm: NgForm): void {
    if (contactForm.invalid) {
      return;
    }

    this.successMessage = 'Nachricht erfolgreich simuliert. Keine echten Daten wurden gesendet.';

    contactForm.resetForm();
  }
}