import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../utils/safe-area.components";
import styled from "styled-components/native";
import { Text } from "../../../components/Typography/Typography.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restourant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestauantsDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
