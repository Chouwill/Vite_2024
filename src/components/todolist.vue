<script setup>
import { ref } from "vue";
const text = ref("這是todolist");
const todos = ref([
  {
    id: 123,
    text: 123456,
  },
]);

const tododata = ref("");

const inputData = ref("");

const addFun = () => {
  console.log(inputData.value);

  todos.value.push({ text: inputData.value });
  //   tododata.value.push(inputData.value);
};
</script>

<template>
  <h2>{{ text }}</h2>
  <input type="text" v-model="inputData" />
  <button @click="addFun" type="button">新增</button>
  <div v-for="(obj, idx) in todos" :key="idx">
    {{ obj.text }}
  </div>
  <!-- <div v-for="(obj, idx) in tododata" :key="idx">
    {{ obj.text }}
  </div> -->
  <h3>{{ tododata }}</h3>
</template>
