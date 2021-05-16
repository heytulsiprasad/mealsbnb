import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
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
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
