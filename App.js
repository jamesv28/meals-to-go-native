import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function App() {
  const isAndroid = Platform.OS == "android";
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>List</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
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
