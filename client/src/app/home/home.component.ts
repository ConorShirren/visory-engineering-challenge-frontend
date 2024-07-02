import { Component, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Event } from '../types/event';
import { EventComponent } from '../event/event.component';
import { EventService } from '../event.service';
import { FormsModule } from '@angular/forms';
import { countryCodes } from '../types/utils/countryCodes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventComponent, FormsModule],
  template: `
    <section>
      <form>
        <label>Location</label>
        <select id="countryDropdown" name="location" [(ngModel)]="location">
          <option *ngFor="let country of countryCodes" [value]="country.code">
            {{ country.name }}
          </option>
        </select>
        <label>Start Date</label
        ><input type="date" [(ngModel)]="startDate" name="startDate" />
        <label>End Date</label
        ><input type="date" [(ngModel)]="endDate" name="endDate" />
        <button class="primary" type="button" (click)="search()">Search</button>
      </form>
    </section>
    <section *ngIf="loading" class="results">
      <div>Loading...</div>
    </section>
    <section *ngIf="!loading" class="results">
      <div *ngIf="events === null">No events returned</div>
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
  loading: boolean = false;
  countryCodes: any[] = countryCodes;

  constructor() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 90);

    this.startDate = this.getDateFormatted(currentDate);
    this.endDate = this.getDateFormatted(futureDate);
    this.location = 'AU';
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

  getDateFormatted(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based, so add 1 and pad with leading zero
    const day = ('0' + date.getDate()).slice(-2); // Pad with leading zero
    return `${year}-${month}-${day}`;
  }

  loadEvents(): void {
    this.loading = true;
    this.eventService
      .getEvents(this.location, this.startDate, this.endDate)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (events: Event[]) => {
          this.events = events;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching events', error);
          this.loading = false;
        },
      });
  }

  onDateChange(): void {
    this.loadEvents();
  }
}
