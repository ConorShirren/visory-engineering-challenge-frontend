export interface Event {
  id: string;
  name: string;
  // location: string;
  classification: string;
  url: string;
  dates: Dates;
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
