export interface Event {
  id: number;
  name: string;
  location: string;
  type: string;
  url: string;
  dates?: Dates;
}

interface Dates {
  start: {
    localDate: string;
    localTime: string;
  };
  end: {
    localDate: string;
    localTime: string;
  };
  timezone: string;
  status: {
    code: string;
  };
  spanMultipleDays: string;
}
