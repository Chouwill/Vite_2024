<script setup>
const text = ref("XXXX");
const num = ref(0);
// 雙向綁定

// setInterval(() => {
//   num.value = num.value + 1;
//   console.log(num.value);
// }, 500);

// reactive的缺點

const data = reactive({
  name: "卡斯柏",
});

// 1. 不能使用純值
// const text1 = reactive("123");

// 2. 不能重新被賦予
// Ajax
// data = {
//   name: "杰倫",
// };
</script>

<template>
  <h1>Vue的資料結構</h1>
  <!-- <h2>{{ text }}</h2>
  <h2>{{ todos }}</h2> -->
  <div class="practice" v-for="todo in todos" :key="todo.id">
    <h2>練習</h2>
    <!-- {{ todo.name }}
    {{ todo.dueDate }}
    {{ todo.completed ? "是" : "否" }} <input type="checkbox" /> -->
  </div>
</template>
