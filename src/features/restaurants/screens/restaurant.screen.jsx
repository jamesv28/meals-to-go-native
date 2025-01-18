import { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

const RestaurantsScreen = () => {
  const isAndroid = Platform.OS == "android";
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={() => setT}
          value={text}
        />
      </View>
      <View style={styles.body}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  body: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
  bodyText: {
    color: "#fff",
    fontSize: 24,
  },
});
export default RestaurantsScreen;
