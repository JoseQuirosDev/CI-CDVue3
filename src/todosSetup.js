

import { computed, ref } from 'vue'
import initialtodo from './mocks/todos.js'
const todos = ref([...initialtodo]); //crea una referencia, un dato que va cambiando, reacciona cuando este dato cambia
const todosIncompleted = computed(() => todos.value.filter(t => !t.completed)); //detecta cuando todos cambia, las genera actualizadas
const todosCompleted = computed(() => todos.value.filter(t => t.completed));// filter genera un nuevo arrar a partir de la condicion - el value sirve para leer lo que tien almacenado

const length = computed(() => todos.value.length);

const toggle = (id) => {
  const todo = todos.value.find(t => t.id === id);
  if (todo?.completed !== undefined) {
    todo.completed = !todo.completed;
  }
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id);
};

const add = (name) => {
  todos.value.push({id: length.value + 1, name, completed: false});

 // const newTodo= {id: length.value + 1, name, completed: false};

  //todos.value.push(newTodo);
};


const todosFactory = () => ({todosIncompleted, todosCompleted, toggle, deleteTodo, add});

export {todosFactory};



//usando composition api


/*
var sumaTradicional = function(a, b){
  return a + b;
}*/



//var sumaConFlecha = (a,b) => a + b;
