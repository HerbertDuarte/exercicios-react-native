import { View, Text, StyleSheet } from 'react-native'

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff",
    justifyContent : "center",
    alignItems : "center"
  },  
  title:{
    fontSize : 22,
    fontWeight : "bold"
  }
})