import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

interface InputProps{
  addTask: (title: string) => void;
}
export const InputText: React.FC<InputProps> = ({addTask}) => {
  const [text, setText] = useState('')

  const onChange = (text:string) => {setText(text)}

  return (
    <View style={styles.view}>
      <TextInput style={styles.input} onChangeText={onChange} placeholder="Enter task text"/>
      <Pressable style={button.button} onPress={() => addTask(text)} >
        <Text style={button.text} >Add ToDo</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2c3440',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  input:{
    marginTop: 10,
    height: 80,
    backgroundColor: "#374151", 
    color: '#ace69a', 
    borderBottomWidth: 2,
    padding: 10,
    borderColor: '#ace69a', 
    width: '100%',
    fontSize: 18,
  }
});

const button = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#ace69a',
    color: 'black',
    width: '80%',
  }, 
  text:{
    margin: 10,
    textAlign: 'center',
    fontSize: 16,
  }
})
