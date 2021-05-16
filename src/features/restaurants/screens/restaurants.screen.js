import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarView = styled.View`
  background-color: hotpink;
  padding: 16px;
`;

const ListBarView = styled.View`
  background-color: lightgreen;
  padding: 16px;
  flex: 1;
`;

const RestaurantsScreen = () => {
  return (
    <StyledSafeAreaView>
      <SearchBarView>
        <Searchbar placeholder="Search" />
      </SearchBarView>
      <ListBarView>
        <RestaurantInfoCard />
      </ListBarView>
    </StyledSafeAreaView>
  );
};

export default RestaurantsScreen;
