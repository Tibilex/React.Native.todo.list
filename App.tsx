import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TodoContainer } from './components/Todo/todoContainer';

export default function App() {
  return (
    <View style={styles.view}>
  
    <TodoContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: '#2c3440',
  },
  text: {
    color: 'red', 
    backgroundColor: 'green'
  }
});
