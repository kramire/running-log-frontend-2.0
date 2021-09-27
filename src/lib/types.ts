//
// USER AND USER SETTINGS
//
export type Unit = "mi" | "km";

export type TrainingFor = "marathon" | "halfMarathon" | "10k" | "5k";

export const weekStartDict = {
  0: "Sun",
  1: "Mon",
};

export interface User {
  id: number;
  userName: string;
  firstName: string;
  unit: Unit;
  weekStart: number;
  trainingFor: TrainingFor | null;
  sendAlerts: boolean;
}

//
// RUN
//
export type RunType =
  | "speed"
  | "distance"
  | "tempo"
  | "easy"
  | "intervals"
  | "hills"
  | "recovery"
  | "farlek"
  | "progression";

export interface Run {
  distance: number;
  unit: Unit;
  date: string;
  location: string | null;
  note: string | null;
  runType: RunType[];
  latitude: number | null;
  longitude: number | null;
  userId: number;
}
