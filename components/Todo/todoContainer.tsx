import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { InputText } from "../Inputs/InputText";
import { TodoHeader } from "./todoHeader";
import { TodoItem } from "./todoItem";

export const TodoContainer: React.FC = () => {
  const [tasks, setTasks ] = useState([
    {
      id: "1",
      title: "Learn React",
      createdAt: Date.now(),
    },
    {
      id: "2",
      title: "Learn Nest.js",
      createdAt: Date.now(),
    },
    {
      id: "3",
      title: "Learn Next.js",
      createdAt: Date.now(),
    },
    {
      id: "4",
      title: "Learn Tailwind",
      createdAt: Date.now(),
    },
    {
      id: "5",
      title: "Learn Javascript",
      createdAt: Date.now(),
    },
  ])
  
  const addTask = (title:string) => {
    setTasks((todos) => {
      return [{
      id: Math.random().toString(36).substring(7),
      title: title,
      createdAt: Date.now(),
      }, ...todos ]
    })
  }

  const removeTask = (id:string) => {
    setTasks([...tasks].filter(t => t.id !== id))
  }

  return (
    <View style={styles.view}>
      <TodoHeader/>
      <InputText addTask={addTask}/>
      <View style={styles.todoContainer}>
        <FlatList data={tasks} renderItem={({ item }) => (
          <TodoItem 
          key={item.id} 
          id={item.id} 
          title={item.title} 
          removeTask={() => removeTask(item.id)} />
          )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    backgroundColor: '#2c3440',
  },
  text: {
    color: '#ace69a', 
    fontSize: 30,
  },
  todoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    marginTop: -400,
  }
});