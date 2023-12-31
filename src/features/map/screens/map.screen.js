import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { MapCallout } from "../components/map-callout.components";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [viewport.northeast.lat, viewport.southwest.lat]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView key={restaurant.name}>
              <Marker
                key={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
                title={restaurant.name}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("RestauantsDetail", {
                      restaurant: restaurant,
                    })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            </MapView>
          );
        })}
      </Map>
    </>
  );
};
