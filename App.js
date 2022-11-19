import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.heading}>
        Good Morning
      </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063757',
    fontFamily: 'American Typewriter',
  },
  headerContainer:{
    backgroundColor: '#2E9BBC',
    borderRadius: '10',
    paddingTop: '5%',
    margin: '5%',

    
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    alignSelf: 'center', 
    fontFamily: 'American Typewriter',
  },
  scrollView: {
    marginBottom: 80,
  },
  taskContainer: {
    marginTop: 20,
  }
});