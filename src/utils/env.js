const liveHost = "https://us-central1-mealstogo-6dc6b.cloudfunctions.net";
const localHost = "http://127.0.0.1:5001/mealstogo-6dc6b/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;

// !!! android test https !!!
// export const host = liveHost;
