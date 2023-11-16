import { mocks } from "./mock/index";
import camalize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject("Location not found");
    }

    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  // const newResult = camalize(result.length);
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camalize(mappedResults);
};
