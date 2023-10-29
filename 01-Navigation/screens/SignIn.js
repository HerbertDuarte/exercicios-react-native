import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {

const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MarkPro</Text>
        <View style={styles.form}>
          <TextInput placeholderTextColor="#999" placeholder='E-mail' style={styles.input} />
          <TextInput placeholderTextColor="#999" placeholder='Senha' style={styles.input} />
          <TouchableOpacity style={styles.button1}>
            <Text onPress={() => navigation.navigate({name: "tabroutes"})} style={styles.textButton1}>
              Acessar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton2}>
              Meu estabelecimento
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.messageConteiner}>
        <Text style={styles.message}>
          Não tenho uma conta. Toque aqui para criar uma agora.
        </Text>
      </View>
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