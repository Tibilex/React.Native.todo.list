import { Pressable, StyleSheet, Text, View } from "react-native";

interface ITodoItemProps {
  id: string;
  title: string;
  removeTask: (id: string) => void;
}
export const TodoItem: React.FC<ITodoItemProps> = ({id, title, removeTask}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text} >{title}</Text> 
      <Pressable style={button.button} onPress={() => removeTask(id)} >
        <Text style={button.text} >X</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: '#2c3440',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text: {
    color: '#ace69a', 
    borderWidth: 1,
    padding: 10,
    borderColor: '#ace69a', 
    width: '80%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    textAlign: 'center',
    fontSize: 18
  }
});

const button = StyleSheet.create({
  button: {
    backgroundColor: '#ace69a',
    color: 'black',
    width: '10%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  }, 
  text:{
    textAlign: 'center',
    fontSize: 16,
    padding: 16
  }
})