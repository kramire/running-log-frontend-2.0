//
// USER AND USER SETTINGS
//
export enum Unit {
  "mi" = "mi",
  "km" = "km",
}

export enum TrainingFor {
  "marathon" = "marathon",
  "halfMarathon" = "halfMarathon",
  "10k" = "10k",
  "5k" = "5k",
}

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
export enum RunType {
  "speed" = "speed",
  "distance" = "distance",
  "tempo" = "tempo",
  "easy" = "easy",
  "intervals" = "intervals",
  "hills" = "hills",
  "recovery" = "recovery",
  "farlek" = "farlek",
  "progression" = "progression",
}

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
