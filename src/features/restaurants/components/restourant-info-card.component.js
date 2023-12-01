import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Typography/Typography.component";

import star from "../../../assets/images/star";
import open from "../../../assets/images/open";

import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./restourant-info-card.styles";
import { Favourite } from "../../../components/Favourites/favourites.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5ijHrTyV26471W7TbHzpFzTVWaDUs2MKuA&usqp=CAU",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={Math.random(`${star}_${placeId}_${index}`)}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
