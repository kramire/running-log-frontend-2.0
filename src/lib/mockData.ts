import { User, Run } from "./types";

export const mockUser: User = {
  id: 1,
  userName: "kitkat",
  firstName: "Katie",
  unit: "mi",
  weekStart: 0,
  trainingFor: null,
  sendAlerts: true,
};

export const mockRun: Run = {
  distance: 8,
  unit: "mi",
  location: "Barcelona, Spain",
  note: "",
  runType: ["distance"],
  latitude: 41.3801,
  longitude: 2.1897,
  date: "2019-07-02",
  userId: 1,
};
