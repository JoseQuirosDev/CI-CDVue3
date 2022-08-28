<script setup>
import { todosFactory } from "../todosSetup";
const { todosIncompleted, todosCompleted, toggle, deleteTodo } = todosFactory();
</script>

<template>
  <h4>ToDo List</h4>
  <p v-if="todosIncompleted.length === 0">Nothing todo</p>
  <ul id="incomplete-tasks">
    <li
      v-for="todo in todosIncompleted"
      :key="todo.id"
      @click="toggle(todo.id)"
    >
      <input type="checkbox" />
      <label>{{ todo.name }}</label>
      <input type="text" />
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
  <h4>Completed List</h4>
  <ul id="completed-tasks">
    <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox" checked @click="toggle(todo.id)" />
      <label>{{ todo.name }}</label>
      <input type="text" />
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
</template>
