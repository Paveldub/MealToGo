import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  console.log("result: ", result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
