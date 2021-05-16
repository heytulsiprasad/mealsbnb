import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.brand.secondary};
  padding: 20px;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant New Orleans",
    icon,
    photos = "https://source.unsplash.com/random/800x600",
    address = "37th Street, Lake Orleans",
    openingHours = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
