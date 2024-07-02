export interface Event {
  id: string;
  name: string;
  classification: string;
  url: string;
  dates: Dates;
  venue: string;
}

interface Dates {
  start: {
    localDate?: string;
    localTime?: string;
  };
  timezone: string;
  status: {
    code: string;
  };
}
