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
      <p class="listing-location">
        {{ event.location }}
      </p>
      <a [routerLink]="['/details', event.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  @Input() event!: Event;
}
