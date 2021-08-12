export const smokeTestingStage = {
  duration: "1m",
  target: 1,
};
export const defaultStages = [
  { duration: "1m", target: 50 },
  { duration: "5m", target: 50 },
  { duration: "1m", target: 0 },
];
export const defaultThreshold = {
  http_req_duration: ["p(95)<1000"],
};

export const BASE_URL = "https://api.thaddeusjiang.com";
