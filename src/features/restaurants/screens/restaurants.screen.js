import React, { useContext } from "react";

import { FlatList } from "react-native";
import styled from "styled-components";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { Spacer } from "../../../components/Spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { RestaurantInfoCard } from "../components/restourant-info-card.component";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../utils/safe-area.components";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}

      <Search />

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
