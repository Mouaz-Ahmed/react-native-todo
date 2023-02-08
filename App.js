import { StatusBar } from 'expo-status-bar';
import { useState ,React} from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'biryani' , key: '1'},
    {text: 'karai' , key: '2'},
    {text: 'raita' , key: '3'},
    {text: 'raita' , key: '3'},
    {text: 'raita' , key: '3'},
    {text: 'raita' , key: '3'},
  ]);

  const pressHandler= (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key !=key)
    })
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      < Header />
      <View style={styles.content}>

        {/* to form */}
        <View style={styles.list}>
        {todos.map((item)=>{
          return(
            <View >
              {/* <Text>{item.text}</Text> */}
              <TodoItem item={item} pressHandler={pressHandler}/>
            </View>
          )
        })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 60,
    
  },
  list:{
    marginTop:20
  }
});