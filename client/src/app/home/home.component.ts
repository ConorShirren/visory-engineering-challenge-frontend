import { Component, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Event } from '../types/event';
import { EventComponent } from '../event/event.component';
import { EventService } from '../event.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventComponent, FormsModule],
  template: `
    <section>
      <form>
        <label>Location</label
        ><input
          type="text"
          placeholder="location"
          [(ngModel)]="location"
          name="location"
        />
        <label>Start Date</label
        ><input type="date" [(ngModel)]="startDate" name="startDate" />
        <label>End Date</label
        ><input type="date" [(ngModel)]="endDate" name="endDate" />
        <button class="primary" type="button" (click)="search()">Search</button>
      </form>
    </section>
    <section class="results">
      <app-event *ngFor="let event of events" [event]="event"> </app-event>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private unsubscribe$: Subject<void> = new Subject<void>();
  eventList: Event[] = [];
  eventService: EventService = inject(EventService);
  filteredLocationList: Event[] = [];
  events: Event[] = [];
  startDate: string;
  endDate: string;
  location: string;

  constructor() {
    this.startDate = '2024-06-27';
    this.endDate = '2024-10-29';
    this.location = 'au';
  }

  search(): void {
    this.loadEvents();
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  formatDateToISOString(date: string): string {
    return new Date(date).toISOString();
  }

  loadEvents(): void {
    this.eventService
      .getEvents(this.location, this.startDate, this.endDate)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (events: Event[]) => {
          console.log(events);
          this.events = events;
        },
        error: (error) => {
          console.error('Error fetching events', error);
        },
      });
  }

  onDateChange(): void {
    this.loadEvents();
  }
}
