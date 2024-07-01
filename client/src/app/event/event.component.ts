import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Event } from '../types/event';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <h2 class="listing-heading">{{ event.name }}</h2>
      <p>Australia</p>
      <p>{{ event.url }}</p>
      <p>{{ event.id }}</p>
      <p>{{ event.dates.start.localDate }}</p>
      <p>{{ event.dates.start.localTime }}</p>
      <p>{{ event.dates.status.code }}</p>
      <p>{{ event.dates.timezone }}</p>
      <p>{{ event.classification }}</p>
      <a [routerLink]="['/details', event.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  @Input() event!: Event;
}
