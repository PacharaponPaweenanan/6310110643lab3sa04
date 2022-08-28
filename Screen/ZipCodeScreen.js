import React from "react";
import { FlatList, View, Text, StyleSheet, StatusBar } from "react-native";
import { TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
  { place: "Pattani", code: "94000" },
  { place: "Bangkok", code: "10000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Udonthani", code: "41000" },
];

const ZipItem = ({ place, code, navigation }) => (
  <TouchableHighlight
    onPress={() => {
      navigation.navigate("Weather", { zipCode: code });
    }}
  >
    <View style={styles.zipItem}>
      <Text>{place}</Text>
      <Text>{code}</Text>
    </View>
  </TouchableHighlight>
);

const _keyExtractor = (item) => item.code;

export default function ZipCodeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  zipItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  zipPlace: {
    flex: 1,
  },
  zipCode: {
    flex: 1,
  },
});