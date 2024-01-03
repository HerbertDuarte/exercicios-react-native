import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/constants";
constants;

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
       
      </View>
      <View style={styles.messageConteiner}>
        <Text style={styles.message}>
          Não tenho uma conta. Toque aqui para criar uma agora.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  form: {
    padding: 20,
    width: "100%",
    gap: 15,
  },
  input: {
    backgroundColor: COLORS.inputBgColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 25,
    fontSize: 16,
  },
  button1: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 25,
    fontSize: 16,
  },
  textButton1: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 16,
    padding: 3,
  },
  button2: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 25,
    fontSize: 16,
  },
  textButton2: {
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 16,
    padding: 3,
  },
  messageConteiner: {
    borderTopColor: COLORS.borderColor,
    borderTopWidth: 0.5,
    width: "100%",
    padding: 15,
  },
  message: {
    color: COLORS.discretText,
    textAlign: "center",
    fontSize: 12,
  },
});
