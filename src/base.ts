export type TagType =
  | "easy"
  | "speed"
  | "distance"
  | "tempo"
  | "intervals"
  | "hills"
  | "recovery"
  | "progression"
  | "fartlek";

export type Unit = "mi" | "km";

export type WeekStart = "Sun" | "Mon";

export interface Run {
  id: string;
  runType: TagType[];
  distance: number;
  date: string;
  location: string;
  note: string;
  latitutde?: number;
  longitude?: number;
}

export type Runs = {
  [index: string]: Run;
};

export interface User {
  id: string;
  unit: Unit;
  weekStart: WeekStart;
  optInAlerts: boolean;
  username: string;
  firstName: string;
  trainingFor: string;
}

export interface Action {
  type: string;
  data: any;
}

export interface StateInterface {
  user: User | null;
  runs: Runs;
}
