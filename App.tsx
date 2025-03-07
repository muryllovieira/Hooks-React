//////////////////////// HOOKS (useState, useEffect, useReducer) ////////////////////////////

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';
// import { useState, useEffect, useReducer } from 'react';

// const reducer = (state: { counter: number }, action: { type: string }) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         counter: state.counter + 1
//       }
//     case 'decrement':
//       return {
//         counter: state.counter - 1
//       }
//     case 'reset':
//       return {
//         counter: state.counter = 0
//       }

//     default:
//       return state
//   }
// }

// export default function App() {

//   const [state, dispatch] = useReducer(reducer, { counter: 0 })
//   const incrementCount = () => {
//     dispatch({ type: 'increment' })
//   }

//   const decrementCount = () => {
//     dispatch({ type: 'decrement' })
//   }
//   const resetCount = () => {
//     dispatch({ type: 'reset' })
//   }

//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     if (count === 0) {
//       Alert.alert('Carrinho', 'Seu carrinho está vazio')
//     } else {
//       console.log('ainda tem itens');

//     }

//   }, [count])

//   const incrementCount = () => {
//     setCount((prevState) => prevState + 1)
//   }

//   const decrementCount = () => {
//     if (count > 0){
//       setCount((prevState) => prevState - 1 )
//     }

//   }

//   const incrementCount = () => {
//     setCount(count + 1)
//   }

//   const decrementCount = () => {
//     setCount(count - 1)
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.big}>{state.counter}</Text>

//       <View style={styles.inline}>
//         <Button title='REMOVER' onPress={decrementCount}></Button>
//         <Button title='ADICIONAR' onPress={incrementCount}></Button>
//         <Button title='CANCELAR' onPress={resetCount}></Button>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   big: {
//     fontSize: 32
//   },
//   inline: {
//     flexDirection: 'row',
//     gap: 10
//   },
// });



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { useState, useEffect, useReducer } from 'react';

const listener = (state: any, action: any) => {
  switch (action.type) {
    case 'add-new-task':
      return {
        tasks: [ ... state.tasks, {name: action.inputValue, isDone: false} ]
      }     
    default:
      return state
  }
}



export default function App() {

  const [state, dispatch] = useReducer(listener, {tasks: []})
  const [inputValue, setInputValue] = useState("")

  const handleAddTask = () => {
    dispatch({type: "add-new-task", inputValue})
  }

  return (
    <View style={styles.container}>

      <View style={styles.inline}>
        <TextInput
          style={styles.enter}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}>
        </TextInput>
        <Button title='ADICIONAR TAREFA' onPress={handleAddTask}></Button>
      </View>

      {state.tasks.map((task: any) => <Text>{task.name}</Text>)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inline: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },
  enter: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#5450d6',
    width: '80%',
    color: 'white'
  }
});

