import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Event } from '../types/event';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="event">
      <h2 class="event-heading">{{ event.name }}</h2>
      <p class="event-details">Event ID: {{ event.id }}</p>
      <p class="event-details">Start Date: {{ event.dates.start.localDate }}</p>
      <p class="event-details">Start Time: {{ event.dates.start.localTime }}</p>
      <p class="event-details">Sale Status: {{ event.dates.status.code }}</p>
      <p class="event-details">Timezone: {{ event.dates.timezone }}</p>
      <p class="event-details">Type: {{ event.classification }}</p>
      <a href="{{ event.url }}" target="_blank">Learn More at Ticketmaster</a>
    </section>
  `,
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  @Input() event!: Event;
}
