import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <View style={styles.container}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea : {
    flex : 1,
    paddingTop : 44,
  },
  header : {

  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "start",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    
  },
}); 