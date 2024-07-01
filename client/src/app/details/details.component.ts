import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Event } from '../types/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{ event?.name }}</h2>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this event location</h2>
        <ul>
          <li>Location: Australia</li>
          <li>{{ event?.url }}</li>
          <li>{{ event?.id }}</li>
          <li>{{ event?.dates?.start?.localDate }}</li>
          <li>{{ event?.dates?.start?.localTime }}</li>
          <li>{{ event?.dates?.status?.code }}</li>
          <li>{{ event?.dates?.timezone }}</li>
          <li>{{ event?.classification }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  eventService = inject(EventService);
  event: Event | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const eventId = parseInt(this.route.snapshot.params['id'], 10);
    this.event = this.eventService.getEventById(eventId);
  }

  // submitApplication() {
  //   this.eventService.submitApplication(
  //     this.applyForm.value.firstName ?? '',
  //     this.applyForm.value.lastName ?? '',
  //     this.applyForm.value.email ?? ''
  //   );
  // }
}
