import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff",
    justifyContent : "space-between",
    alignItems : "center"
  },
  content : {
    flex : 1,
    backgroundColor : "#fff",
    justifyContent : "center",
    alignItems : "center",
    width : "100%"
  },  
  title:{
    fontSize : 28,
    fontWeight : "bold",
    color : "#5c67c6"
  },
  form:{
    padding : 20,
    width : "100%",
    gap : 15
  },
  input :{
    backgroundColor : "#f5f5f5",
    paddingVertical : 10 ,
    paddingHorizontal : 15,
    width : "100%",
    borderRadius : 25,
    fontSize :16,
  },
  button1 :{
    backgroundColor : "#5c67c6",
    paddingVertical : 10 ,
    paddingHorizontal : 15,
    width : "100%",
    borderRadius : 25,
    fontSize :16,
  },
  textButton1:{
    color : "#FFF",
    textAlign : "center",
    fontSize :16,
    padding : 3
  },
  button2 :{
    backgroundColor : "#fff",
    borderWidth :2,
    borderColor : '#5c67c6',
    paddingVertical : 8 ,
    paddingHorizontal : 15,
    width : "100%",
    borderRadius : 25,
    fontSize :16,
  },
  textButton2:{
    color : "#5c67c6",
    textAlign : "center",
    fontSize :16,
    padding : 3
  },
  messageConteiner :{
    borderTopColor : "#ddd",
    borderTopWidth : 0.5,
    width : "100%",
    padding :15
  },
  message :{
    color : "#aaa",
    textAlign: "center",
    fontSize : 12
  }
})