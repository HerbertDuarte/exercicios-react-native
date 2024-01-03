import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";
export default function CardService({ service }) {

  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ name: "Search" })} style={styles.container}>
      <View style={styles.content}>{service.icon()}</View>
      <Text style={styles.label}>{service.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent : 'center',
    alignItems : 'center'
  },
  content: {
    backgroundColor: COLORS.inputBgColor,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius : 12
  },
  label : {
    flexWrap : 'wrap',
    maxWidth : 68,
    textAlign : 'center'
  }
});
