import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, DefaultStyles } from "../constants/constants";
import { ArrowLeftCircleIcon } from "lucide-react-native";
import Reserve from "../components/Reserve/Reserve";

export default function Calendar() {
  return (
    <SafeAreaView style={DefaultStyles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity>
              <ArrowLeftCircleIcon
                strokeWidth={3}
                size={32}
                color={COLORS.primary}
                style={styles.locateIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Minhas reservas</Text>
          </View>
          <View style={styles.emptyView}></View>
        </View>
        <ScrollView style={styles.content}>
          <Reserve/>
          <Reserve/>
          <Reserve/>
          <Reserve/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "start",
    alignItems: "start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  header: {
    padding: 12,
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1,
  },

  label: {
    fontSize: 16,
    color: COLORS.discretText,
  },

  serviceInfo: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1,
  },

  serviceName: {
    fontSize: 22,
    fontWeight: "500",
    color: COLORS.grey,
  },

  serviceSubInfo: {
    fontSize: 16,
    color: COLORS.lightGrey,
  },
  emptyView: {
    width: 32,
  },
});
