import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Event } from '../types/event';
import { EventComponent } from '../event/event.component';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by location" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-event *ngFor="let event of filteredLocationList" [event]="event">
      </app-event>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  eventList: Event[] = [];
  eventService: EventService = inject(EventService);
  filteredLocationList: Event[] = [];
  constructor() {
    this.eventList = this.eventService.getAllEvents();
    this.filteredLocationList = this.eventList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.eventList;
      return;
    }

    this.filteredLocationList = this.eventList.filter((event) =>
      event?.type.toLowerCase().includes(text.toLowerCase())
    );
  }
}
