import { StyleSheet } from "react-native";

export default constants = {
  COLORS: {
    primary: "#5c67c6",
    borderColor: "#ddd",
    discretText: "#aaa",
    inputBgColor: "#f5f5f5",
    placeholderColor: "#999",
    white: "#fff",
    lightGrey : "#666",
    grey : "#444"
  },
  DefaultStyles: StyleSheet.create({
    safeArea: {
      flex: 1,
      paddingTop: 44,
    },
    input: {
      backgroundColor: "#f5f5f5",
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: "100%",
      borderRadius: 25,
      fontSize: 16,
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : "space-between"
    },
  }),
};

export const { COLORS, DefaultStyles } = constants;
