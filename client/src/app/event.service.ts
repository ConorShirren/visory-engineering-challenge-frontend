import { Event } from './types/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  readonly baseUrl =
    'https://qafi4l34q4.execute-api.us-east-1.amazonaws.com/Stage/';
  protected eventList: Event[] = [];

  constructor(private http: HttpClient) {}

  getEvents(
    location: string,
    startDate: string,
    endDate: string
  ): Observable<Event[]> {
    const url = `${this.baseUrl}/getTicketmasterEvents?location=${location}&startDateTime=${startDate}&endDateTime=${endDate}`;
    return this.http.get<Event[]>(url);
  }

  getEventById(id: string): Event | undefined {
    // this.eventList = this.getEvents();
    return this.eventList.find((event) => event.id === id);
  }
}
