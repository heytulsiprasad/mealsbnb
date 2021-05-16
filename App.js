import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text>search</Text>
        </View>
        <View style={styles.listBar}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    backgroundColor: "green",
    padding: 16,
  },
  listBar: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});

export default App;
