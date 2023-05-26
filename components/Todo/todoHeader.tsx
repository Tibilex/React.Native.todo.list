import { StyleSheet, Text, View } from "react-native";

export const TodoHeader: React.FC = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>ToDo List App</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    height: 120,
    paddingTop: 70,
    backgroundColor: '#1a1a1a',
  },
  text: {
    color: '#ace69a', 
    fontSize: 30,
    textAlign: 'center'
  }
});