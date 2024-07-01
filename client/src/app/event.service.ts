import { Event } from './types/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected eventList: Event[] = [
    {
      name: 'THE THE',
      id: 'G5vGZ9UW9mOLH',
      url: 'https://www.ticketmaster.com.au/the-the-st-kilda-16-11-2024/event/13005F6F57BA07FC',
      dates: {
        start: {
          localDate: '2024-11-16',
          localTime: '20:30:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Rock',
    },
    {
      name: 'The The',
      id: 'G5vGZ9UXPJ3V7',
      url: 'https://www.ticketmaster.com.au/the-the-st-kilda-17-11-2024/event/13005F6FA5992D04',
      dates: {
        start: {
          localDate: '2024-11-17',
          localTime: '20:30:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Rock',
    },
    {
      name: 'The The',
      id: 'G5efZ9MAs-O-O',
      url: 'https://www.ticketmaster.com.au/the-the-adelaide-18-11-2024/event/25005F7171860860',
      dates: {
        start: {
          localDate: '2024-11-18',
          localTime: '19:00:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Adelaide',
      },
      classification: 'Rock',
    },
    {
      name: 'The The Australian Tour',
      id: 'G5vGZ9UXcZK8G',
      url: 'https://www.ticketmaster.com.au/the-the-australian-tour-brisbane-23-11-2024/event/13005F6FAD01340C',
      dates: {
        start: {
          localDate: '2024-11-23',
          localTime: '19:30:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Brisbane',
      },
      classification: 'Rock',
    },
    {
      name: 'The The Australian Tour',
      id: 'G5vGZ9UXMTKWb',
      url: 'https://www.ticketmaster.com.au/the-the-australian-tour-brisbane-24-11-2024/event/13005F6FB7FD3F58',
      dates: {
        start: {
          localDate: '2024-11-24',
          localTime: '19:30:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Brisbane',
      },
      classification: 'Rock',
    },
    {
      name: 'Silvers Circus',
      id: '177YvOG61TNAp-j',
      url: 'https://www.ticketmaster.com.au/silvers-circus-burnley-01-07-2024/event/130060AFE315685C',
      dates: {
        start: {
          localDate: '2024-07-01',
          localTime: '14:30:00',
        },
        status: {
          code: 'cancelled',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Circus & Specialty Acts',
    },
    {
      name: 'Silvers Circus',
      id: '177YvOG61TxPpfk',
      url: 'https://www.ticketmaster.com.au/silvers-circus-burnley-30-06-2024/event/130060AFE2956506',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '11:00:00',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Circus & Specialty Acts',
    },
    {
      name: 'Silvers Circus',
      id: '177YvOG61TxSkho',
      url: 'https://www.ticketmaster.com.au/silvers-circus-burnley-30-06-2024/event/130060AFE2CC66D1',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '15:00:00',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Circus & Specialty Acts',
    },
    {
      name: 'Dream Circus',
      id: '177YvOG6GK5H9u7',
      url: 'https://www.ticketmaster.com.au/dream-circus-milsons-point-01-07-2024/event/130060C4CBF17344',
      dates: {
        start: {
          localDate: '2024-07-01',
          localTime: '13:00:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Sydney',
      },
      classification: 'Circus & Specialty Acts',
    },
    {
      name: 'CheerCon ICEBREAKER 2024 - Weekend Pass',
      id: '17a8vOG6GpB1-Xy',
      url: 'https://www.ticketmaster.com.au/cheercon-icebreaker-2024-weekend-pass-mile-end-south-29-06-2024/event/250060C5BA2A1FB9',
      dates: {
        start: {
          localDate: '2024-06-29',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Adelaide',
      },
      classification: 'Miscellaneous',
    },
    {
      name: 'CheerCon ICEBREAKER 2024 - Single Day',
      id: '17a8vOG6GpBdsXV',
      url: 'https://www.ticketmaster.com.au/cheercon-icebreaker-2024-single-day-mile-end-south-29-06-2024/event/250060C5BA0F1FB4',
      dates: {
        start: {
          localDate: '2024-06-29',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Adelaide',
      },
      classification: 'Miscellaneous',
    },
    {
      name: 'The Woman In Black',
      id: '1AKZkZSGketne--',
      url: 'https://www.ticketmaster.com.au/the-woman-in-black-melbourne-30-06-2024/event/13006033A9A82861',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '13:00:00',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Theatre',
    },
    {
      name: 'The Sounds of Simon & Garfunkel',
      id: '1AKZkvFGkdRSEL5',
      url: 'https://www.ticketmaster.com.au/the-sounds-of-simon-garfunkel-thirroul-30-06-2024/event/13006048EFCE77CB',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '14:00:00',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Sydney',
      },
      classification: 'Other',
    },
    {
      name: 'Frosted - A Winter Spectacular',
      id: '1AKZkvpGkeYvJHQ',
      url: 'https://www.ticketmaster.com.au/frosted-a-winter-spectacular-fountain-gate-01-07-2024/event/13006056B0066F1A',
      dates: {
        start: {
          localDate: '2024-07-01',
          localTime: '11:00:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Family',
    },
    {
      name: 'West Coast Eagles v Hawthorn',
      id: '1APZkv6GkdANoma',
      url: 'https://www.ticketmaster.com.au/west-coast-eagles-v-hawthorn-burswood-30-06-2024/event/25006047C58D1B89',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '14:40:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Perth',
      },
      classification: 'Football',
    },
    {
      name: 'St Kilda v Port Adelaide - AFL & Centre Wing Members',
      id: '1APZkvfGkdaZeld',
      url: 'https://www.ticketmaster.com.au/st-kilda-v-port-adelaide-afl-docklands-30-06-2024/event/25006054C9002AC3',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '13:10:00',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Football',
    },
    {
      name: 'St Kilda v Port Adelaide',
      id: '1APZkvoGkdY8wsT',
      url: 'https://www.ticketmaster.com.au/st-kilda-v-port-adelaide-docklands-30-06-2024/event/25006051F0432C7F',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '13:10:00',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Melbourne',
      },
      classification: 'Football',
    },
    {
      name: '2024 Suncorp Super Netball Season R12: NSW Swifts v Firebirds',
      id: '1AefZbAGkRt7Spp',
      url: 'https://www.ticketmaster.com.au/2024-suncorp-super-netball-season-r12-sydney-olympic-park-30-06-2024/event/2500605BE9133596',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '14:00:00',
        },
        status: {
          code: 'offsale',
        },
        timezone: 'Australia/Sydney',
      },
      classification: 'Netball',
    },
    {
      name: 'IMAGINATOR',
      id: '1AefZbAGkmm6wBy',
      url: 'https://www.ticketmaster.com.au/imaginator-surfers-paradise-30-06-2024/event/2500605BAE1F2EB9',
      dates: {
        start: {
          localDate: '2024-06-30',
          localTime: '10:00:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Brisbane',
      },
      classification: 'Multimedia',
    },
    {
      name: 'IMAGINATOR',
      id: '1AefZbAGkmmFeBD',
      url: 'https://www.ticketmaster.com.au/imaginator-surfers-paradise-01-07-2024/event/2500605BAE202EBB',
      dates: {
        start: {
          localDate: '2024-07-01',
          localTime: '10:00:00',
        },
        status: {
          code: 'onsale',
        },
        timezone: 'Australia/Brisbane',
      },
      classification: 'Multimedia',
    },
  ];

  getAllEvents(): Event[] {
    return this.eventList;
  }

  getEventById(id: string): Event | undefined {
    return this.eventList.find((event) => event.id === id);
  }

  constructor(private http: HttpClient) {}

  getEvents(
    location: string,
    startDate: string,
    endDate: string
  ): Observable<Event[]> {
    const url = `https://qafi4l34q4.execute-api.us-east-1.amazonaws.com/Stage/getTicketmasterEvents?location=${location}&startDateTime=${startDate}&endDateTime=${endDate}`;
    // const url = `your-api-endpoint?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<Event[]>(url);
  }
}
