import React from "react";
import { SvgXml } from "react-native-svg";

import star from "./../../../../assets/star";
import openSvg from "./../../../../assets/open";
import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/typography/text.component";
import {
  Title,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Section,
  SectionEnd,
  Rating,
  Icon,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant New Orleans",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address = "37th Street, Lake Orleans",
    rating = 4,
    isClosedTemporarily = true,
    isOpenNow = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={openSvg} width={20} height={20} />}
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

export default RestaurantInfoCard;
