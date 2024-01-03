import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, DefaultStyles } from "../constants/constants";
import { ArrowLeftCircleIcon } from "lucide-react-native";

export default function Search() {
  const count = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
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
            <Text style={styles.title}>MarkPro</Text>
            <Text style={styles.label}>medico</Text>
          </View>
          <View style={styles.emptyView}></View>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={DefaultStyles.input}
              placeholderTextColor="#999"
              placeholder="Pesquisar"
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{
              paddingBottom : 64
            }}
          >
            {count.map((item, index) => (
              <TouchableOpacity key={index}>
                <View style={styles.serviceInfo}>
                  <Text style={styles.serviceName}>Clínica Sonesb</Text>
                  <Text style={styles.serviceSubInfo}>
                  Av. Jonas Hortelio, 306
                  </Text>
                  <Text style={styles.serviceSubInfo}>
                  Recreio - Vitória da Conquista
                  </Text>
                  <Text style={styles.serviceSubInfo}>(77) 99000-0000</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
