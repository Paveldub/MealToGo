import React from "react";
import { CompactRestaurantInfo } from "../../../components/Restautants/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
