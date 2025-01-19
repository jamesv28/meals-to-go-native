import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: #bf0d3e;
`;

const InfoCard = styled(Card)`
  background-color: #ffffff;
`;

const RestaurantImage = styled(Card.Cover)`
  padding: 20px;
  background-color: #ffffff;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Paper Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <InfoCard>
      <RestaurantImage key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </InfoCard>
  );
};

export default RestaurantInfoCard;
