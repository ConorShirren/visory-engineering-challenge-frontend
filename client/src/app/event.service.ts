import { Event } from './types/event';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected eventList: Event[] = [
    {
      id: 0,
      name: 'Harry Styles Live',
      location: 'Melbourne',
      type: 'concert',
      url: 'url',
    },
    {
      id: 1,
      name: 'Coldplay World Tour',
      location: 'Sydney',
      type: 'concert',
      url: 'url',
    },
  ];

  getAllEvents(): Event[] {
    return this.eventList;
  }

  getEventById(id: number): Event | undefined {
    return this.eventList.find((event) => event.id === id);
  }
}
